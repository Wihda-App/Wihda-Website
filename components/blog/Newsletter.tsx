"use client";

import { Mail } from "lucide-react";
export function Newsletter({ dict }: { dict: any }) {
	return (
		<section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
					<Mail className="w-6 h-6" />
				</div>
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
					{dict.Newsletter.text_1}
				</h2>
				<p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
					{dict.Newsletter.text_2}
				</p>

				<form
					className="max-w-md mx-auto flex gap-3"
					onSubmit={(e) => {
						e.preventDefault();
						console.log("Newsletter signup");
					}}
				>
					<div className="flex-grow">
						<label htmlFor="email-address" className="sr-only">
							{dict.Newsletter.text_3}
						</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm"
							placeholder="Enter your email"
						/>
					</div>
					<button
						type="submit"
						className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
					>
						{dict.Newsletter.text_4}
					</button>
				</form>
				<p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
					{dict.Newsletter.text_5}
				</p>
			</div>
		</section>
	);
}
