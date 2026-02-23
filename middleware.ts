// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "ar"];
let defaultLocale = "en";

function getLocale(request: NextRequest) {
	// 1. Prioritize user's saved preference in cookies
	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
	if (cookieLocale && locales.includes(cookieLocale)) {
		return cookieLocale;
	}

	// 2. Fallback to browser language
	const acceptLang = request.headers.get("accept-language");
	if (acceptLang && acceptLang.includes("ar")) return "ar";

	return defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;

	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next|api|.*\\..*).*)"],
};
