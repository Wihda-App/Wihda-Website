import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/schemas/contact";

const BACKEND_URL = "https://wihda-backend.khamjed123.workers.dev/v1/contact";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// 1. Validate on frontend/Next.js side first
		const data = contactSchema.parse(body);

		// 2. Extract client IP to forward to the backend for accurate rate-limiting
		const forwardedFor = request.headers.get("x-forwarded-for");
		const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

		// 3. Forward the validated data to the Hono backend
		const backendResponse = await fetch(BACKEND_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Forwarded-For": ip, // Passes user's IP so KV rate limit works properly
			},
			body: JSON.stringify(data),
		});

		const result = await backendResponse.json();

		// 4. Handle backend errors (Rate limit, validation, etc.)
		if (!backendResponse.ok) {
			if (backendResponse.status === 429) {
				return NextResponse.json(
					{
						success: false,
						message: "Too many submissions. Please try again later.",
					},
					{ status: 429 },
				);
			}

			console.error("[Contact Form Backend Error]", result);
			return NextResponse.json(
				{
					success: false,
					message: result.error?.message || "Failed to submit the form.",
				},
				{ status: backendResponse.status },
			);
		}

		// 5. Success response
		return NextResponse.json(
			{
				success: true,
				message:
					"Your message has been received. We will get back to you soon!",
			},
			{ status: 200 },
		);
	} catch (error) {
		// Handle Zod validation errors (if it fails before reaching backend)
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					success: false,
					message: "Validation failed",
					errors: error.flatten().fieldErrors,
				},
				{ status: 400 },
			);
		}

		console.error("[Contact Form Internal Error]", error);
		return NextResponse.json(
			{
				success: false,
				message: "Something went wrong. Please try again later.",
			},
			{ status: 500 },
		);
	}
}
