import React from "react";
export const ProblemMission = ({ dict }: { dict: any }) => {
	return (
		<section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				{/* --- The Problem: Reporting Made Easy --- */}
				<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-32 relative">
					<div className="md:w-1/2 order-2 md:order-1">
						<div className="relative mx-auto border-gray-900 dark:border-gray-800 bg-gray-900 border-[10px] rounded-[2rem] h-[500px] w-[260px] shadow-2xl flex flex-col items-center">
							{/* Notch */}
							<div className="h-[24px] w-[100px] bg-gray-900 absolute top-0 rounded-b-xl z-20"></div>
							{/* Screen Content */}
							<div className="w-full h-full rounded-[1.4rem] bg-gray-100 dark:bg-gray-900 overflow-hidden relative flex flex-col">
								{/* Map Background */}
								<div className="absolute inset-0 bg-gray-200 opacity-50">
									{/* Fake Map Grid */}
									<div
										className="w-full h-full"
										style={{
											backgroundImage:
												"radial-gradient(#cbd5e1 1px, transparent 1px)",
											backgroundSize: "20px 20px",
										}}
									></div>
								</div>

								{/* UI Overlay */}
								<div className="relative z-10 p-4 h-full flex flex-col">
									<div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg mt-8 mb-4">
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
											<span className="font-bold text-sm text-gray-900 dark:text-white">
												{dict.ProblemMission.text_1}
											</span>
										</div>
									</div>

									{/* Location Pin */}
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
										<div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-md mb-1 whitespace-nowrap">
											{dict.ProblemMission.text_2}
										</div>
										<span className="material-icons text-4xl text-primary drop-shadow-xl">
											{dict.ProblemMission.text_3}
										</span>
									</div>

									{/* Bottom Sheet */}
									<div className="mt-auto bg-white dark:bg-gray-800 rounded-xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
										<div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
										<h4 className="font-bold text-gray-900 dark:text-white mb-2">
											{dict.ProblemMission.text_4}
										</h4>
										<div className="flex gap-2 mb-4">
											<div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center">
												<span className="material-icons text-gray-400">
													{dict.ProblemMission.text_5}
												</span>
											</div>
											<div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-lg"></div>
										</div>
										<button className="w-full bg-primary text-white font-bold py-2 rounded-lg text-sm">
											{dict.ProblemMission.text_6}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-1/2 order-1 md:order-2">
						<div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-50 dark:bg-red-900/20 rounded-full">
							{dict.ProblemMission.text_7}
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
							{dict.ProblemMission.text_8}
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{dict.ProblemMission.text_9}
						</p>
						<ul className="space-y-3">
							<li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
								<span className="material-icons text-red-500">
									{dict.ProblemMission.text_10}
								</span>
								<span>{dict.ProblemMission.text_11}</span>
							</li>
							<li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
								<span className="material-icons text-red-500">
									{dict.ProblemMission.text_12}
								</span>
								<span>{dict.ProblemMission.text_13}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* --- Pull Quote --- */}
				<div className="relative py-16 my-16 text-center border-y border-gray-100 dark:border-gray-800">
					<h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mx-auto">
						{dict.ProblemMission.text_14}
						<span className="text-primary">{dict.ProblemMission.text_15}</span>
						{dict.ProblemMission.text_16}
					</h3>
				</div>

				{/* --- Our Mission: Success --- */}
				<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
					<div className="md:w-1/2 pl-4">
						<div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
							{dict.ProblemMission.text_17}
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
							{dict.ProblemMission.text_18}
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
							{dict.ProblemMission.text_19}
						</p>
						<button className="text-primary font-bold flex items-center gap-2 group">
							{dict.ProblemMission.text_20}
							<span className="material-icons group-hover:translate-x-1 transition-transform">
								{dict.ProblemMission.text_21}
							</span>
						</button>
					</div>

					<div className="md:w-1/2 flex justify-center md:justify-end">
						{/* Notification Stack Visual */}
						<div className="relative w-[300px]">
							{/* Notification 1 (Back) */}
							<div className="absolute top-0 left-4 w-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg opacity-40 transform scale-90 -translate-y-8 border border-gray-100 dark:border-gray-700">
								<div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
								<div className="h-3 w-1/2 bg-gray-100 dark:bg-gray-800 rounded"></div>
							</div>
							{/* Notification 2 (Middle) */}
							<div className="absolute top-0 left-2 w-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg opacity-70 transform scale-95 -translate-y-4 border border-gray-100 dark:border-gray-700">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
										<span className="material-icons text-sm">
											{dict.ProblemMission.text_22}
										</span>
									</div>
									<div>
										<div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
									</div>
								</div>
							</div>
							{/* Notification 3 (Front - Main) */}
							<div className="relative w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border-l-4 border-secondary transform translate-y-0">
								<div className="flex justify-between items-start mb-4">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
											<span className="material-icons">
												{dict.ProblemMission.text_23}
											</span>
										</div>
										<div>
											<h4 className="font-bold text-gray-900 dark:text-white text-sm">
												{dict.ProblemMission.text_24}
											</h4>
											<p className="text-xs text-gray-500">
												{dict.ProblemMission.text_25}
											</p>
										</div>
									</div>
								</div>
								<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
									{dict.ProblemMission.text_26}
								</p>
								<div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center gap-3">
									<img
										src="https://images.unsplash.com/photo-1596236987820-213c54452136?auto=format&fit=crop&w=100&q=80"
										className="w-12 h-12 rounded object-cover"
										alt="Fixed light"
									/>
									<span className="text-xs text-gray-500 italic">
										{dict.ProblemMission.text_27}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
