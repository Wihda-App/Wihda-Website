"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DownloadVisual } from "@/components/download-visual";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Countdown Dialog ─────────────────────────────────────────────────────────

function useCountdown(targetDate: Date) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const tick = () => {
			const diff = targetDate.getTime() - Date.now();
			if (diff <= 0) {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}
			setTimeLeft({
				days: Math.floor(diff / 86400000),
				hours: Math.floor((diff % 86400000) / 3600000),
				minutes: Math.floor((diff % 3600000) / 60000),
				seconds: Math.floor((diff % 60000) / 1000),
			});
		};
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, [targetDate]);

	return timeLeft;
}

function pad(n: number) {
	return String(n).padStart(2, "0");
}

interface CountdownDialogProps {
	open: boolean;
	onClose: () => void;
	platform: "ios" | "android";
	daysFromNow: number;
	dict: any;
}

function CountdownDialog({
	open,
	onClose,
	platform,
	daysFromNow,
	dict,
}: CountdownDialogProps) {
	const target = React.useMemo(() => {
		const d = new Date();
		d.setDate(d.getDate() + daysFromNow);
		return d;
	}, [daysFromNow]);

	const { days, hours, minutes, seconds } = useCountdown(target);

	const isIos = platform === "ios";
	const accentColor = isIos ? "#3b82f6" : "#22c55e"; // blue for iOS, green for Android

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

			{/* Dialog */}
			<div
				className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
				style={{ background: "var(--background, #fff)" }}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Top accent bar */}
				<div
					className="h-1.5 w-full"
					style={{
						background: `linear-gradient(90deg, ${accentColor}, ${isIos ? "#818cf8" : "#86efac"})`,
					}}
				/>

				<div className="p-8 flex flex-col items-center gap-6 text-center">
					{/* Icon */}
					<div
						className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
						style={{
							background: `${accentColor}18`,
							border: `2px solid ${accentColor}30`,
						}}
					>
						<span
							className="material-icons text-4xl"
							style={{ color: accentColor }}
						>
							{isIos ? "apple" : "android"}
						</span>
					</div>

					{/* Title */}
					<div className="space-y-2">
						<h2 className="text-2xl font-extrabold text-foreground tracking-tight">
							{isIos ? "iOS App" : "Android App"}{" "}
							<span style={{ color: accentColor }}>Coming Soon</span>
						</h2>
						<p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
							{isIos
								? "The iOS app is launching very soon. We'll be live on the App Store in:"
								: "The Android app is on its way to the Play Store. Launching in:"}
						</p>
					</div>

					{/* Countdown */}
					<div className="flex items-stretch gap-3 w-full justify-center">
						{[
							{ value: days, label: "Days" },
							{ value: hours, label: "Hrs" },
							{ value: minutes, label: "Min" },
							{ value: seconds, label: "Sec" },
						].map(({ value, label }, i) => (
							<React.Fragment key={label}>
								{i > 0 && (
									<div className="flex items-center pb-5 text-2xl font-bold text-muted-foreground">
										:
									</div>
								)}
								<div
									className="flex flex-col items-center gap-1 flex-1 py-3 px-2 rounded-2xl"
									style={{
										background: `${accentColor}10`,
										border: `1px solid ${accentColor}20`,
									}}
								>
									<span
										className="text-3xl font-extrabold tabular-nums leading-none"
										style={{ color: accentColor }}
									>
										{pad(value)}
									</span>
									<span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
										{label}
									</span>
								</div>
							</React.Fragment>
						))}
					</div>

					{/* Notify CTA */}
					<div className="w-full space-y-3">
						<button
							className="cursor-pointer w-full h-10 rounded-xl font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
							onClick={onClose}
						>
							Skip
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export const DownloadPageComponent = ({ dict }: { dict: any }) => {
	const [iosDialogOpen, setIosDialogOpen] = useState(false);
	const [androidDialogOpen, setAndroidDialogOpen] = useState(false);

	return (
		<div className="min-h-screen overflow-hidden bg-background flex flex-col font-sans relative">
			{/* Background Gradients */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

			{/* ── Top-right action buttons ── */}
			<div className="absolute  bottom-5 right-5 z-20 flex items-center gap-2">
				{/* Report Bug button */}
				<Link href="/feedback" passHref>
					<button className=" inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 backdrop-blur-lg animate-float-slow cursor-pointer">
						<span className="material-icons text-base leading-none">
							bug_report
						</span>
						{dict.DownloadPage.report_bug_btn ?? "Report Bug"}
					</button>
				</Link>
			</div>

			<main className="flex-grow flex items-center justify-center px-4 py-20 w-full max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
					{/* Left Column: Content & CTA */}
					<div
						className={cn(
							"flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up order-2 lg:order-1",
							dict.TEXT_DIRECTION == "rtl" && "lg:text-right",
						)}
					>
						{/* Headlines */}
						<div className="space-y-4">
							<h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
								{dict.DownloadPage.text_1}
								<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
									{dict.DownloadPage.text_2}{" "}
								</span>
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
								{dict.DownloadPage.text_3}{" "}
								<span className="text-foreground font-bold">
									{dict.DownloadPage.text_4}{" "}
								</span>
								{dict.DownloadPage.text_5}
							</p>
						</div>

						{/* Visual QR Code & Store Buttons */}
						<div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center lg:justify-start">
							{/* QR Code Block */}
							<div className="hidden sm:flex flex-col items-center gap-2 p-3 bg-white dark:bg-card border border-border/50 rounded-2xl shadow-sm shrink-0">
								<div className="w-32 h-32 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
									<div className="absolute inset-0 bg-white p-2">
										<div className="w-full h-full border-4 border-slate-900 rounded-lg flex items-center justify-center">
											<span className="material-icons text-4xl text-slate-900">
												{dict.DownloadPage.text_6}
											</span>
										</div>
										<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
											<span className="text-[10px] font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm">
												{dict.DownloadPage.text_7}
											</span>
										</div>
									</div>
								</div>
								<span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
									{dict.DownloadPage.text_8}
								</span>
							</div>

							{/* Store Buttons Stack */}
							<div className="flex flex-col gap-3 w-full sm:w-auto">
								{/* iOS — opens countdown (2 days) */}
								<button
									onClick={() => setIosDialogOpen(true)}
									className="h-14 px-8 rounded-xl text-base gap-3 shadow-md hover:translate-y-[-2px] transition-all w-full sm:w-auto justify-start cursor-pointer inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
								>
									<span className="material-icons text-3xl">
										{dict.DownloadPage.text_9}
									</span>
									<div
										className={cn(
											"text-left leading-tight",
											dict.TEXT_DIRECTION == "rtl" && "text-right",
										)}
									>
										<div className="text-[10px] uppercase font-medium opacity-80">
											{dict.DownloadPage.text_10}
										</div>
										<div className="font-bold">{dict.DownloadPage.text_11}</div>
									</div>
								</button>

								{/* Android — opens countdown (10 days) */}
								<button
									onClick={() => setAndroidDialogOpen(true)}
									className="h-14 px-8 rounded-xl text-base gap-3 shadow-md hover:translate-y-[-2px] transition-all bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-slate-700 dark:hover:bg-slate-600 w-full sm:w-auto justify-start cursor-pointer inline-flex items-center font-medium"
								>
									<span className="material-icons text-3xl">
										{dict.DownloadPage.text_12}
									</span>
									<div
										className={cn(
											"text-left leading-tight",
											dict.TEXT_DIRECTION == "rtl" && "text-right",
										)}
									>
										<div className="text-[10px] uppercase font-medium opacity-80">
											{dict.DownloadPage.text_13}
										</div>
										<div className="font-bold">{dict.DownloadPage.text_14}</div>
									</div>
								</button>

								{/* Web App */}
								<div className="flex items-center gap-3 pt-1">
									<div className="flex-1 h-px bg-border/50" />
									<span className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
										{dict.DownloadPage.web_or ?? "or use the web"}
									</span>
									<div className="flex-1 h-px bg-border/50" />
								</div>
								<Link
									href="https://app.wihdaapp.com/home"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-auto"
								>
									<button className="h-12 px-8 rounded-xl text-sm gap-2.5 border-2 border-primary/30 hover:border-primary/60 bg-primary/5 hover:bg-primary/10 text-primary hover:translate-y-[-2px] transition-all w-full justify-start cursor-pointer inline-flex items-center font-semibold">
										<span className="material-icons text-xl">language</span>
										<div
											className={cn(
												"text-left leading-tight",
												dict.TEXT_DIRECTION == "rtl" && "text-right",
											)}
										>
											<div className="text-[10px] uppercase font-medium opacity-70">
												{dict.DownloadPage.web_label ?? "Open in Browser"}
											</div>
											<div className="font-bold text-sm">
												{dict.DownloadPage.web_cta ?? "app.wihdaapp.com"}
											</div>
										</div>
									</button>
								</Link>
							</div>
						</div>

						{/* Trust Indicators */}
						<div className="flex items-center gap-6 pt-4 border-t border-border/40 w-full justify-center lg:justify-start flex-wrap">
							<div className="flex items-center gap-1">
								<div className="flex text-yellow-500">
									{[15, 16, 17, 18, 19].map((n) => (
										<span key={n} className="material-icons text-sm">
											{dict.DownloadPage[`text_${n}`]}
										</span>
									))}
								</div>
								<span className="text-sm font-bold ml-2">
									{dict.DownloadPage.text_20}
								</span>
							</div>
							<div className="w-px h-8 bg-border/60" />
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<span className="material-icons text-sm text-green-500">
									{dict.DownloadPage.text_21}
								</span>
								<span>{dict.DownloadPage.text_22}</span>
							</div>
							<div className="w-px h-8 bg-border/60" />
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<span className="material-icons text-sm text-primary">
									{dict.DownloadPage.text_23}
								</span>
								<span>{dict.DownloadPage.text_24}</span>
							</div>
						</div>
					</div>

					{/* Right Column: Visual */}
					<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end scale-90 sm:scale-100 lg:scale-110 origin-center lg:origin-right">
						<DownloadVisual dict={dict} />
					</div>
				</div>
			</main>

			{/* ── Countdown Dialogs ── */}
			<CountdownDialog
				open={iosDialogOpen}
				onClose={() => setIosDialogOpen(false)}
				platform="ios"
				daysFromNow={2}
				dict={dict}
			/>
			<CountdownDialog
				open={androidDialogOpen}
				onClose={() => setAndroidDialogOpen(false)}
				platform="android"
				daysFromNow={10}
				dict={dict}
			/>
		</div>
	);
};
