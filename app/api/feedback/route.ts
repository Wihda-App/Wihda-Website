// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = "1F_AMSqTRj3j0P9ZHZP7XJHkrQ_o2WECEmhWIaO_dmI8";

// Sheet names — create these tabs in your spreadsheet, or change to your preference
const IDEA_SHEET = "IdeaFeedback";
const APP_SHEET = "AppFeedback";

// ─── Headers ─────────────────────────────────────────────────────────────────
// These match the order of the row arrays below.
// Row 1 of each sheet should have these headers (the route won't write them automatically).
//
// IdeaFeedback sheet headers:
//   Timestamp | Name | Anonymous | Neighborhood | City | IdeaOpinion | Usefulness |
//   PersonalUse | NeighborhoodUse | LackConnection | FeaturesInterest | Improve |
//   Concerns | Suggestions
//
// AppFeedback sheet headers:
//   Timestamp | Name | Device | Experience | EaseOfUse | DesignFeedback |
//   Navigation | FeaturesTried | WorksExpected | BugsEncountered | BugDescription |
//   Dislikes | ImproveFirst | UseRegularly | Recommend | Additional

function getGoogleAuth() {
	// Reads the service account JSON from an env variable.
	// Set GOOGLE_SERVICE_ACCOUNT_JSON in your .env.local to the full JSON string.
	const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
	if (!raw)
		throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON env variable is not set.");

	const credentials = JSON.parse(raw);

	return new google.auth.GoogleAuth({
		credentials,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});
}

function buildIdeaRow(data: any): string[] {
	return [
		new Date().toISOString(), // Timestamp
		data.name ?? "", // Name
		data.anonymous ?? "", // Anonymous
		data.neighborhood ?? "", // Neighborhood
		data.city ?? "", // City
		data.ideaOpinion ?? "", // IdeaOpinion
		data.usefulness ?? "", // Usefulness
		data.personalUse ?? "", // PersonalUse
		data.neighborhoodUse ?? "", // NeighborhoodUse
		data.lackConnection ?? "", // LackConnection
		(data.featuresInterest ?? []).join(", "), // FeaturesInterest (comma-separated)
		data.improve ?? "", // Improve
		data.concerns ?? "", // Concerns
		data.suggestions ?? "", // Suggestions
	];
}

function buildAppRow(data: any): string[] {
	return [
		new Date().toISOString(), // Timestamp
		data.name ?? "", // Name
		data.device ?? "", // Device
		data.experience ?? "", // Experience
		data.easeOfUse ?? "", // EaseOfUse
		data.designFeedback ?? "", // DesignFeedback
		data.navigation ?? "", // Navigation
		(data.featuresTried ?? []).join(", "), // FeaturesTried (comma-separated)
		data.worksExpected ?? "", // WorksExpected
		data.bugsEncountered ?? "", // BugsEncountered
		data.bugDescription ?? "", // BugDescription
		data.dislikes ?? "", // Dislikes
		data.improveFirst ?? "", // ImproveFirst
		data.useRegularly ?? "", // UseRegularly
		data.recommend ?? "", // Recommend
		data.additional ?? "", // Additional
	];
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (!body?.type || !["idea", "app"].includes(body.type)) {
			return NextResponse.json(
				{ success: false, message: "Invalid or missing feedback type." },
				{ status: 400 },
			);
		}

		const auth = getGoogleAuth();
		const sheets = google.sheets({ version: "v4", auth });

		const sheetName = body.type === "idea" ? IDEA_SHEET : APP_SHEET;
		const row = body.type === "idea" ? buildIdeaRow(body) : buildAppRow(body);

		await sheets.spreadsheets.values.append({
			spreadsheetId: SPREADSHEET_ID,
			range: `${sheetName}!A1`,
			valueInputOption: "USER_ENTERED",
			insertDataOption: "INSERT_ROWS",
			requestBody: {
				values: [row],
			},
		});

		return NextResponse.json({ success: true });
	} catch (error: any) {
		console.error("[/api/feedback] Error:", error);
		return NextResponse.json(
			{ success: false, message: error.message ?? "Internal server error." },
			{ status: 500 },
		);
	}
}
