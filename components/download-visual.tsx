"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Logo from "./logo";
import { Scale } from "lucide-react";

// A custom hook to measure element dimensions dynamically
const useImageDimensions = () => {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});
	const imgRef = useRef<HTMLImageElement>(null);
	useLayoutEffect(() => {
		if (!imgRef.current) return;

		// Handler to update dimensions
		const handleResize = () => {
			if (imgRef.current) {
				const { offsetWidth, offsetHeight } = imgRef.current;
				setDimensions({
					width: offsetWidth,
					height: offsetHeight,
				});
			}
		};

		// Use ResizeObserver for continuous tracking
		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(imgRef.current);
		handleResize();
		return () => {
			resizeObserver.disconnect();
		};
	}, []);
	const handleImageLoad = () => {
		if (imgRef.current) {
			const { offsetWidth, offsetHeight } = imgRef.current;
			setDimensions({
				width: offsetWidth,
				height: offsetHeight,
			});
		}
	};
	return {
		imgRef,
		dimensions,
		handleImageLoad,
	};
};
export const DownloadVisual = ({ dict }: { dict: any }) => {
	// Toggle for Green Screen vs Interactive Simulator
	const [isActive, setIsActive] = useState(false);
	const { imgRef, dimensions, handleImageLoad } = useImageDimensions();

	// Calculate base scale layout
	const isReady = dimensions.width > 0;
	// The simulator is designed at exactly 286x571 (the size of the transparent bounding box in the 1024px image)
	const TARGET_WIDTH = 286;
	const TARGET_HEIGHT = 571;
	const scaleFactor = isReady ? dimensions.width / 1024 : 1;

	// Simulator States for Cleanify Flow
	const [step, setStep] = useState(0);
	const [isProcessing, setIsProcessing] = useState(false);
	const [timeLeft, setTimeLeft] = useState(20 * 60);

	// Timer logic for the "Time Gate"
	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (step === 2 && timeLeft > 0) {
			interval = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 100);
		} else if (timeLeft === 0 && step === 2) {
			setStep(3);
		}
		return () => clearInterval(interval);
	}, [step, timeLeft]);

	// Auto-advance for processing state
	useEffect(() => {
		if (step === 4) {
			const timer = setTimeout(() => {
				setStep(5);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [step]);
	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};
	const handleStart = () => {
		setIsProcessing(true);
		setTimeout(() => {
			setIsProcessing(false);
			setStep(1);
		}, 800);
	};
	const handleTakePhoto = (nextStep: number) => {
		setIsProcessing(true);
		setTimeout(() => {
			setIsProcessing(false);
			setStep(nextStep);
		}, 1500);
	};
	return (
		<div className="relative w-full h-150 flex items-center justify-center perspective-1000">
			{/* Hand Holding Phone Container */}
			<div className="relative w-130 h-full flex items-end justify-center pb-0">
				{/* 1. WRAPPER CONTAINER: Controls unified scaling and masking */}
				<div
					className={`relative w-full aspect-square drop-shadow-2xl mask-[linear-gradient(to_bottom,transparent_10%,black_50%,black_85%,transparent_100%)] ${isActive ? "z-20" : "z-10"}`}
					style={{
						scale: "140%",
					}}
				>
					{/* THE PHONE MOCKUP (Image) */}
					<img
						ref={imgRef}
						onLoad={handleImageLoad}
						src={
							isActive
								? "/images/output-onlinepngtools.png"
								: "/images/holding-phone.png"
						}
						alt="App usage demonstration"
						className={`absolute inset-0 z-20 w-full h-full object-contain ${isActive ? "pointer-events-none" : ""}`}
					/>

					{/* 2. THE APP EMULATOR UI */}
					{isActive && isReady && (
						<div
							className="absolute z-0 bg-transparent flex flex-col overflow-hidden shadow-inner animate-in fade-in duration-500 font-sans rounded-[1.5rem]"
							style={{
								// Exact mapped coordinates based on the 1024x1024 original scale
								left: dimensions.width * (365 / 1024),
								top: dimensions.width * (272 / 1024),
								width: TARGET_WIDTH,
								height: TARGET_HEIGHT,
								transform: `scale(${scaleFactor})`,
								transformOrigin: "top left",
							}}
						>
							{/* --- HEADER (Static) --- */}
							<div className="px-3 pt-6 pb-1 bg-background shrink-0">
								<div className="flex justify-between items-center mb-2">
									<svg
										className="w-4 h-4 text-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
									<div className="bg-white border border-secondary rounded-full p-1 flex relative w-40 h-6 shadow-sm">
										<div className="absolute right-0.5 top-0.5 bottom-0.5 w-1/2 bg-secondary rounded-full transition-all duration-300 shadow-sm"></div>
										<div className="flex-1 flex justify-center items-center z-10 text-secondary font-bold text-[8px]">
											{dict.TARGET_HEIGHT.text_1}
										</div>
										<div className="flex-1 flex justify-center items-center z-10 text-white font-bold text-[8px]">
											{dict.TARGET_HEIGHT.text_2}
										</div>
									</div>
									<svg
										className="w-5 h-5 text-foreground"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										/>
									</svg>
								</div>
								<h1 className="text-lg font-bold text-foreground mb-0">
									{dict.TARGET_HEIGHT.text_3}
								</h1>
								<div className="flex items-center text-muted-foreground text-xs font-medium">
									<svg
										className="w-2 h-2 mr-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									{dict.TARGET_HEIGHT.text_4}
								</div>
							</div>

							{/* --- SEARCH & TABS (Static) --- */}
							<div className="px-3 pt-2 bg-background shrink-0">
								<div className="relative mb-2">
									<input
										type="text"
										placeholder="Type..."
										className="w-full h-8 pl-7 pr-7 rounded-xl border-2 border-primary bg-white text-muted-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-0 text-xs"
										readOnly
									/>
									<svg
										className="w-4 h-4 text-primary absolute left-2 top-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
									<svg
										className="w-5 h-5 text-primary absolute right-2 top-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
								</div>
								<div className="flex border-b border-border pb-0.5">
									<div className="flex-1 text-center pb-1 border-b-2 border-secondary text-secondary font-bold text-sm">
										{dict.TARGET_HEIGHT.text_5}
									</div>
									<div className="flex-1 text-center pb-1 border-b-2 border-transparent text-muted-foreground font-medium text-sm">
										{dict.TARGET_HEIGHT.text_6}
									</div>
								</div>
							</div>

							{/* --- DYNAMIC CLEANIFY CONTENT --- */}
							<div className="flex-1 overflow-y-auto bg-background pb-5 custom-scrollbar">
								{/* STEP 0 */}
								{step === 0 && (
									<div className="mx-3 mt-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
										<div className="bg-card rounded-2xl p-4 shadow-sm border border-border text-center space-y-4">
											<div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
												<Logo className="w-6 h-6 text-secondary" />
											</div>
											<div>
												<h2 className="text-base font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_7}
												</h2>
												<p className="text-xs text-muted-foreground mt-1">
													{dict.TARGET_HEIGHT.text_8}
													<br />
													{dict.TARGET_HEIGHT.text_9}
												</p>
											</div>
											<div className="bg-primary/10 rounded-lg p-3 text-left border border-primary/20">
												<div className="flex items-start gap-2">
													<div className="bg-white p-1 rounded-lg shadow-sm text-primary">
														<svg
															className="w-3 h-3"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
													</div>
													<div>
														<h4 className="text-[8px] font-bold text-primary uppercase tracking-wide">
															{dict.TARGET_HEIGHT.text_10}
														</h4>
														<ul className="text-[8px] text-foreground mt-0.5 space-y-0.5 list-disc list-inside">
															<li>{dict.TARGET_HEIGHT.text_11}</li>
															<li>{dict.TARGET_HEIGHT.text_12}</li>
															<li>{dict.TARGET_HEIGHT.text_13}</li>
														</ul>
													</div>
												</div>
											</div>
											<button
												onClick={handleStart}
												disabled={isProcessing}
												className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-2 rounded-lg shadow-lg shadow-secondary/20 transition-all active:scale-95 flex justify-center items-center gap-1.5"
											>
												{isProcessing ? (
													<svg
														className="animate-spin h-4 w-4 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
												) : (
													<>
														<svg
															className="w-4 h-4"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
															/>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
														{dict.TARGET_HEIGHT.text_14}
													</>
												)}
											</button>
										</div>
									</div>
								)}

								{/* STEP 1 */}
								{step === 1 && (
									<div className="mx-3 mt-3 animate-in fade-in slide-in-from-right-4 duration-500">
										<div className="bg-card rounded-2xl p-4 shadow-sm border border-border text-center space-y-4">
											<div className="relative w-full aspect-[4/3] bg-muted rounded-xl border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center overflow-hidden group">
												<div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
												<svg
													className="w-8 h-8 text-muted-foreground mb-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
												<span className="text-xs font-bold text-muted-foreground">
													{dict.TARGET_HEIGHT.text_15}
												</span>
											</div>
											<div>
												<h3 className="text-base font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_16}
												</h3>
												<p className="text-[8px] text-muted-foreground mt-0.5">
													{dict.TARGET_HEIGHT.text_17}
												</p>
											</div>
											<button
												onClick={() => handleTakePhoto(2)}
												disabled={isProcessing}
												className="w-full bg-foreground hover:bg-black text-white font-bold py-2 rounded-xl shadow-lg transition-all active:scale-95 flex justify-center items-center gap-1.5"
											>
												{isProcessing ? "Uploading..." : "Capture"}
											</button>
										</div>
									</div>
								)}

								{step === 2 && (
									<div className="mx-3 mt-3 animate-in fade-in zoom-in duration-500">
										<div className="bg-card rounded-2xl p-4 shadow-sm border border-border text-center space-y-4 relative overflow-hidden">
											<div
												className="absolute inset-0 bg-secondary/5 opacity-50"
												style={{
													backgroundImage:
														"radial-gradient(#86c536 1px, transparent 1px)",
													backgroundSize: "15px 15px",
												}}
											></div>
											<div className="relative z-10">
												<div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-secondary mb-2">
													<span className="text-lg font-mono font-bold text-foreground">
														{formatTime(timeLeft)}
													</span>
												</div>
												<h3 className="text-base font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_18}
												</h3>
												<p className="text-[8px] text-muted-foreground mt-0.5 font-medium bg-secondary/10 inline-block px-1.5 py-0.5 rounded-md">
													{dict.TARGET_HEIGHT.text_19}
												</p>
												<div className="mt-4 space-y-2">
													<div className="flex items-center justify-between text-[8px] text-muted-foreground bg-muted p-2 rounded-lg">
														<span>{dict.TARGET_HEIGHT.text_20}</span>
														<span className="text-secondary font-bold flex items-center gap-1">
															<span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>{" "}
															{dict.TARGET_HEIGHT.text_21}
														</span>
													</div>
													<div className="flex items-center justify-between text-[8px] text-muted-foreground bg-muted p-2 rounded-lg">
														<span>{dict.TARGET_HEIGHT.text_22}</span>
														<span className="text-foreground font-bold">
															{dict.TARGET_HEIGHT.text_23}
														</span>
													</div>
												</div>

												{/* --- NEW SKIP BUTTON --- */}
												<button
													onClick={() => setTimeLeft(0)}
													className="w-full mt-4 bg-secondary/10 hover:bg-secondary/20 text-secondary font-bold py-2 rounded-xl text-xs transition-all active:scale-95 flex justify-center items-center gap-1.5"
												>
													<svg
														className="w-3.5 h-3.5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2.5}
															d="M13 5l7 7-7 7M5 5l7 7-7 7"
														/>
													</svg>
													{dict.TARGET_HEIGHT.text_24}
												</button>
												{/* ----------------------- */}
											</div>
										</div>
									</div>
								)}

								{/* STEP 3 */}
								{step === 3 && (
									<div className="mx-3 mt-3 animate-in fade-in slide-in-from-right-4 duration-500">
										<div className="bg-card rounded-2xl p-4 shadow-sm border border-border text-center space-y-4">
											<div className="relative w-full aspect-[4/3] bg-muted rounded-xl border border-dashed border-secondary/50 flex flex-col items-center justify-center overflow-hidden group">
												<div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
												<svg
													className="w-8 h-8 text-secondary mb-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
												<span className="text-xs font-bold text-secondary">
													{dict.TARGET_HEIGHT.text_25}
												</span>
											</div>
											<div>
												<h3 className="text-base font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_26}
												</h3>
												<p className="text-[8px] text-muted-foreground mt-0.5">
													{dict.TARGET_HEIGHT.text_27}
												</p>
											</div>
											<button
												onClick={() => handleTakePhoto(4)}
												disabled={isProcessing}
												className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-2 rounded-xl shadow-lg shadow-secondary/20 transition-all active:scale-95 flex justify-center items-center gap-1.5"
											>
												{isProcessing ? "Verifying..." : "Submit"}
											</button>
										</div>
									</div>
								)}

								{/* STEP 4 */}
								{step === 4 && (
									<div className="mx-3 mt-3 animate-in fade-in zoom-in duration-500">
										<div className="bg-card rounded-2xl p-5 shadow-sm border border-border text-center space-y-4">
											<div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
												<svg
													className="w-6 h-6 text-primary animate-spin"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
											</div>
											<div>
												<h3 className="text-base font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_28}
												</h3>
												<p className="text-[8px] text-muted-foreground mt-1">
													{dict.TARGET_HEIGHT.text_29}
												</p>
											</div>
										</div>
									</div>
								)}

								{/* STEP 5 */}
								{step === 5 && (
									<div className="mx-3 mt-3 animate-in fade-in slide-in-from-bottom-8 duration-700">
										<div className="bg-card rounded-2xl p-4 shadow-lg shadow-secondary/10 border border-secondary/20 text-center space-y-4 relative overflow-hidden">
											<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
											<div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/30">
												<svg
													className="w-7 h-7 text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={3}
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<div>
												<h2 className="text-lg font-bold text-foreground">
													{dict.TARGET_HEIGHT.text_30}
												</h2>
												<p className="text-xs text-muted-foreground mt-1">
													{dict.TARGET_HEIGHT.text_31}
												</p>
											</div>
											<div className="bg-primary/10 rounded-xl p-3 border border-primary/20 flex items-center justify-between">
												<div className="flex items-center gap-2">
													<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-yellow-500 shadow-sm">
														<span className="font-bold text-base">$</span>
													</div>
													<div className="text-left">
														<div className="text-[8px] text-muted-foreground font-bold uppercase">
															{dict.TARGET_HEIGHT.text_32}
														</div>
														<div className="text-base font-bold text-foreground">
															{dict.TARGET_HEIGHT.text_33}
														</div>
													</div>
												</div>
												<div className="text-primary font-bold text-[8px] bg-white px-1.5 py-0.5 rounded-md shadow-sm">
													{dict.TARGET_HEIGHT.text_34}
												</div>
											</div>
											<button
												onClick={() => {
													setStep(0);
													setTimeLeft(20 * 60);
												}}
												className="w-full bg-foreground text-white font-bold py-2 rounded-xl mt-1"
											>
												{dict.TARGET_HEIGHT.text_35}
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* 3. FLOATING CARD - SHOWN ONLY IN START STATE */}
			{!isActive && (
				<div className="absolute top-[20%] right-4 md:top-[28%] md:-right-0 lg:-right-5 z-20 animate-float-slow">
					<div
						onClick={() => setIsActive(true)}
						className="bg-card/90 dark:bg-neutral-900/90 backdrop-blur-md border border-border shadow-2xl rounded-[2rem] p-5 w-64 md:w-72 flex flex-col gap-4 transition-all hover:scale-105 duration-300 cursor-pointer group hover:border-primary/50"
					>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-2xl bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 group-hover:rotate-12 transition-transform">
								<span className="material-icons text-white text-xl">
									{dict.TARGET_HEIGHT.text_36}
								</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-extrabold text-sm text-foreground tracking-tight">
									{dict.TARGET_HEIGHT.text_37}
								</h4>
								<span className="text-[8px] text-primary font-bold uppercase tracking-widest">
									{dict.TARGET_HEIGHT.text_38}
								</span>
							</div>
						</div>

						<p className="text-xs text-muted-foreground leading-relaxed font-medium">
							{dict.TARGET_HEIGHT.text_39}
						</p>

						<div className="flex items-center justify-between pt-2 border-t border-border/50">
							<span className="text-[8px] text-muted-foreground font-bold italic">
								{dict.TARGET_HEIGHT.text_40}
							</span>
							<div className="flex items-center gap-1 text-primary text-[8px] font-black group-hover:gap-2 transition-all">
								{dict.TARGET_HEIGHT.text_41}{" "}
								<span className="material-icons text-xs">
									{dict.TARGET_HEIGHT.text_42}
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
