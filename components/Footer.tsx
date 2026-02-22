import React from "react";
import Link from "next/link";
import Logo from "./logo";
export const Footer = ({ dict }: { dict: any }) => {
	return (
		<>
			{/* Team / Community Photo Banner */}
			<section className="py-20 bg-background-light dark:bg-background-dark">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl overflow-hidden relative h-80 shadow-2xl">
					<img
						alt="Large group of diverse friends laughing together outdoors"
						className="w-full h-full object-cover"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEK32zZv6pZkcFEbwUJABgSQRObDRN79nsLJRb2e_p8odqDE3M6-w8ZETjlhJKQcaif-WUEPS8FQayZYBePXfgQIelL70fHGsiqJRJCQPURYrsl1nVevL5TkCO9RO8opcCBRUvJevaWjb923kMg6v-3yJ0be5hCbP7D37dmNH8KyKKQ7oMYvImzBaXCrD1yVG1nCZveLn_alqftChffz74uiy9WS3LgzQ-hXFvTbzsaQsb10XVsH3TBF-8EAZiLrXfGAKFHMdMTEb5"
					/>
					<div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-10 py-8 rounded-2xl text-center max-w-lg mx-4 shadow-xl border border-white/20">
							<p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
								{dict.Footer.text_1}
							</p>
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
								{dict.Footer.text_2}
							</h2>
						</div>
					</div>
				</div>
			</section>

			{/* Main Footer */}
			<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								{dict.Footer.text_3}
							</h4>
							<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
								<li>
									<Link
										href="/#features"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_4}
									</Link>
								</li>
								<li>
									<Link
										href="/#pricing"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_5}
									</Link>
								</li>
								<li>
									<Link
										href="/#integrations"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_6}
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								{dict.Footer.text_7}
							</h4>
							<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
								<li>
									<Link
										href="/about"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_8}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_9}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_10}
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								{dict.Footer.text_11}
							</h4>
							<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
								<li>
									<Link
										href="/blog"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_12}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_13}
									</Link>
								</li>
								<li>
									<Link
										href="/help"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_14}
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								{dict.Footer.text_15}
							</h4>
							<ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
								<li className="flex items-center gap-3">
									<span className="material-icons text-primary text-xl">
										{dict.Footer.text_16}
									</span>
									<a
										target="_blank"
										href="mailto:contact@wihdaapp.com"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_17}
									</a>
								</li>
								<li className="flex items-start gap-3">
									<span className="material-icons text-primary text-xl mt-0.5">
										{dict.Footer.text_18}
									</span>
									<div className="flex flex-col">
										<a
											target="_blank"
											href="tel:+966590386935"
											className="hover:text-primary transition-colors font-semibold text-gray-900 dark:text-white"
										>
											{dict.Footer.text_19}
										</a>
										<span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
											{dict.Footer.text_20}
										</span>
									</div>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-5 h-5 text-primary mt-1">
										<svg
											className="fill-current w-full h-full"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
										</svg>
									</div>
									<div className="flex flex-col">
										<a
											href="https://wa.me/213549599182"
											target="_blank"
											className="hover:text-primary transition-colors font-semibold text-gray-900 dark:text-white"
										>
											{dict.Footer.text_21}
										</a>
										<span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
											{dict.Footer.text_22}
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
								{dict.Footer.text_23}
							</h4>
							<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
								<li>
									<Link
										href="/legal"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_24}
									</Link>
								</li>
								<li>
									<Link
										href="/legal"
										className="hover:text-primary transition-colors"
									>
										{dict.Footer.text_25}
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2">
							<Logo className="w-8 h-8" />
							<span className="font-bold text-xl text-gray-900 dark:text-white font-sans">
								{dict.Footer.text_26}
							</span>
						</div>
						<p className="text-sm text-gray-500">
							© {new Date().getFullYear()}
							{dict.Footer.text_27}
						</p>
						<div className="flex space-x-6 items-center">
							<a
								target="_blank"
								href="https://www.facebook.com/share/1AxomFTBiT/?mibextid=wwXIfr"
								className="text-gray-400 hover:text-primary transition-all hover:scale-110"
								aria-label="Facebook"
							>
								<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
							<a
								target="_blank"
								href="https://www.instagram.com/wihda.app"
								className="text-gray-400 hover:text-primary transition-all hover:scale-110"
								aria-label="Instagram"
							>
								<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.984 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
								</svg>
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/wihda"
								className="text-gray-400 hover:text-primary transition-all hover:scale-110"
								aria-label="LinkedIn"
							>
								<svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
