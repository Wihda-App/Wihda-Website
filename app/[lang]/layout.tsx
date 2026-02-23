import type React from "react";
import type { Metadata } from "next";
import { Fredoka, Cascadia_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/theme-provider";
const fredoka = Fredoka({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
	preload: true,
});
const cascadia_Mono = Cascadia_Mono({
	subsets: ["arabic"],
	variable: "--font-sans",
	display: "swap",
	preload: true,
});

// 1. Tell Next.js which languages to pre-build (SSG)
export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "ar" }];
}

export const metadata: Metadata = {
	title: "Wihda – Community Impact, Neighborhood by Neighborhood",
	description:
		"Connect with your community. Share food, organize cleanups, and drive local change. Wihda is the app for neighbors who care.",
};
export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	// 3. Await the params!
	const { lang } = await params;
	const fontVar = lang == "ar" ? cascadia_Mono.variable : fredoka.variable;
	return (
		<html
			dir={lang == "ar" ? "rtl" : "ltr"}
			lang={lang}
			suppressHydrationWarning
			className={`${fontVar} antialiased scroll-smooth`}
		>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary bg-background-light dark:bg-background-dark text-neutral-dark dark:text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<QueryProvider>
						{children}
						<Toaster richColors position="bottom-right" />
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
