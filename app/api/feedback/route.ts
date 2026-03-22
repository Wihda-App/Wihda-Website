// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";

const SPREADSHEET_ID = "1F_AMSqTRj3j0P9ZHZP7XJHkrQ_o2WECEmhWIaO_dmI8";

const IDEA_SHEET = "IdeaFeedback";
const APP_SHEET = "AppFeedback";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

// ─────────────────────────────────────────────────────────────
// 🔐 Create JWT for Google OAuth
// ─────────────────────────────────────────────────────────────
async function createJWT() {
	const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
	if (!raw) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");

	const creds = JSON.parse(raw);

	const header = {
		alg: "RS256",
		typ: "JWT",
	};

	const now = Math.floor(Date.now() / 1000);

	const payload = {
		iss: creds.client_email,
		scope: GOOGLE_SCOPE,
		aud: GOOGLE_TOKEN_URL,
		exp: now + 3600,
		iat: now,
	};

	const encoder = new TextEncoder();

	function base64url(input: ArrayBuffer | string) {
		let str =
			typeof input === "string"
				? input
				: String.fromCharCode(...new Uint8Array(input));

		return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
	}

	const encodedHeader = base64url(JSON.stringify(header));
	const encodedPayload = base64url(JSON.stringify(payload));

	const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);

	// Import private key
	const key = await crypto.subtle.importKey(
		"pkcs8",
		str2ab(creds.private_key),
		{
			name: "RSASSA-PKCS1-v1_5",
			hash: "SHA-256",
		},
		false,
		["sign"],
	);

	const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, data);

	const encodedSignature = base64url(signature);

	return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

function str2ab(pem: string) {
	const b64 = pem
		.replace("-----BEGIN PRIVATE KEY-----", "")
		.replace("-----END PRIVATE KEY-----", "")
		.replace(/\n/g, "");

	const binary = atob(b64);
	const buffer = new ArrayBuffer(binary.length);
	const view = new Uint8Array(buffer);

	for (let i = 0; i < binary.length; i++) {
		view[i] = binary.charCodeAt(i);
	}

	return buffer;
}

// ─────────────────────────────────────────────────────────────
// 🎟️ Get Google Access Token
// ─────────────────────────────────────────────────────────────
async function getAccessToken() {
	const jwt = await createJWT();

	const res = await fetch(GOOGLE_TOKEN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
			assertion: jwt,
		}),
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.error_description || "Auth failed");
	}

	return data.access_token;
}

// ─────────────────────────────────────────────────────────────
// 🧱 Row builders
// ─────────────────────────────────────────────────────────────
function buildIdeaRow(data: any): string[] {
	return [
		new Date().toISOString(),
		data.name ?? "",
		data.anonymous ?? "",
		data.neighborhood ?? "",
		data.city ?? "",
		data.ideaOpinion ?? "",
		data.usefulness ?? "",
		data.personalUse ?? "",
		data.neighborhoodUse ?? "",
		data.lackConnection ?? "",
		(data.featuresInterest ?? []).join(", "),
		data.improve ?? "",
		data.concerns ?? "",
		data.suggestions ?? "",
	];
}

function buildAppRow(data: any): string[] {
	return [
		new Date().toISOString(),
		data.name ?? "",
		data.device ?? "",
		data.experience ?? "",
		data.easeOfUse ?? "",
		data.designFeedback ?? "",
		data.navigation ?? "",
		(data.featuresTried ?? []).join(", "),
		data.worksExpected ?? "",
		data.bugsEncountered ?? "",
		data.bugDescription ?? "",
		data.dislikes ?? "",
		data.improveFirst ?? "",
		data.useRegularly ?? "",
		data.recommend ?? "",
		data.additional ?? "",
	];
}

// ─────────────────────────────────────────────────────────────
// 🚀 API Route
// ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (!body?.type || !["idea", "app"].includes(body.type)) {
			return NextResponse.json(
				{ success: false, message: "Invalid type" },
				{ status: 400 },
			);
		}

		const sheetName = body.type === "idea" ? IDEA_SHEET : APP_SHEET;

		const row = body.type === "idea" ? buildIdeaRow(body) : buildAppRow(body);

		const accessToken = await getAccessToken();

		const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED`;

		const res = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				values: [row],
			}),
		});

		const data = await res.json();

		if (!res.ok) {
			throw new Error(JSON.stringify(data));
		}

		return NextResponse.json({ success: true });
	} catch (error: any) {
		console.error("[/api/feedback] Error:", error);
		return NextResponse.json(
			{
				success: false,
				message: error.message || "Internal error",
			},
			{ status: 500 },
		);
	}
}
