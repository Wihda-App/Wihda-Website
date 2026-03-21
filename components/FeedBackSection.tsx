"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// ─── Zod Schemas ────────────────────────────────────────────────────────────────

const ideaFeedbackSchema = z.object({
	type: z.literal("idea"),
	name: z.string().optional(),
	anonymous: z.enum(["yes", "no"]),
	neighborhood: z.string().optional(),
	city: z.string().optional(),
	ideaOpinion: z.string().min(1, "Please tell us your thoughts on the idea."),
	usefulness: z.enum(["very_useful", "useful", "neutral", "not_useful"]),
	personalUse: z.enum(["yes", "maybe", "no"]),
	neighborhoodUse: z.enum(["yes", "maybe", "no"]),
	lackConnection: z.enum(["yes", "no", "not_sure"]),
	featuresInterest: z.array(z.string()).default([]),
	improve: z.string().optional(),
	concerns: z.string().optional(),
	suggestions: z.string().optional(),
});

const appFeedbackSchema = z.object({
	type: z.literal("app"),
	name: z.string().optional(),
	device: z.enum(["android", "iphone", "web"]),
	experience: z.enum(["excellent", "good", "average", "poor"]),
	easeOfUse: z.enum(["very_easy", "easy", "difficult", "very_difficult"]),
	designFeedback: z.string().optional(),
	navigation: z.enum(["yes", "somewhat", "no"]),
	featuresTried: z.array(z.string()).default([]),
	worksExpected: z.enum(["yes", "mostly", "no"]),
	bugsEncountered: z.enum(["yes", "no"]),
	bugDescription: z.string().optional(),
	dislikes: z.string().optional(),
	improveFirst: z.string().optional(),
	useRegularly: z.enum(["yes", "maybe", "no"]),
	recommend: z.enum(["yes", "maybe", "no"]),
	additional: z.string().optional(),
});

type IdeaFeedbackValues = z.infer<typeof ideaFeedbackSchema>;
type AppFeedbackValues = z.infer<typeof appFeedbackSchema>;
type FeedbackPayload = IdeaFeedbackValues | AppFeedbackValues;

// ─── Shared API call ────────────────────────────────────────────────────────────

async function submitFeedbackForm(payload: FeedbackPayload) {
	const res = await fetch("/api/feedback", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	const result = await res.json();
	if (!result.success)
		throw new Error(result.message || "Something went wrong");
	return result;
}

// Fixed English keys for DB consistency
const IDEA_FEATURES = [
	"sharing",
	"helping",
	"activities",
	"clean_earn",
	"rewards",
];
const APP_FEATURES = [
	"posting",
	"sharing",
	"activities",
	"clean_earn",
	"rewards",
];

// ─── Idea Feedback Form ─────────────────────────────────────────────────────────

function IdeaFeedbackForm({ dict }: { dict: any }) {
	const fDict = dict.Feedback.IdeaForm;
	const sDict = dict.Feedback.Shared;

	const form = useForm<IdeaFeedbackValues>({
		resolver: zodResolver(ideaFeedbackSchema),
		defaultValues: {
			type: "idea",
			name: "",
			anonymous: "no",
			neighborhood: "",
			city: "",
			ideaOpinion: "",
			featuresInterest: [],
			improve: "",
			concerns: "",
			suggestions: "",
		},
	});

	const mutation = useMutation({
		mutationFn: submitFeedbackForm,
		onSuccess: () => {
			toast.success(fDict.toast_success);
			form.reset();
		},
		onError: () => toast.error(fDict.toast_error),
	});

	return (
		<div className="flex flex-col h-full">
			<div className="mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wihda-blue/10 text-wihda-blue text-xs font-bold uppercase tracking-wider mb-4">
					{fDict.badge}
				</div>
				<h2 className="text-3xl font-bold text-neutral-dark dark:text-white mb-3">
					{fDict.title}
				</h2>
				<p className="text-muted-foreground">{fDict.description}</p>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
					className="space-y-8 grow"
				>
					{/* Section 1: About You */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg border-b pb-2">
							{fDict.section1}
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.name_label}</FormLabel>
										<FormControl>
											<Input placeholder={fDict.name_placeholder} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="anonymous"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.anonymous_label}</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={sDict.select_placeholder} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="yes">{sDict.yes}</SelectItem>
												<SelectItem value="no">{sDict.no}</SelectItem>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="neighborhood"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.neighborhood_label}</FormLabel>
										<FormControl>
											<Input
												placeholder={fDict.neighborhood_placeholder}
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.city_label}</FormLabel>
										<FormControl>
											<Input placeholder={fDict.city_placeholder} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</div>

					{/* Section 2: Opinion */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg border-b pb-2">
							{fDict.section2}
						</h3>
						<FormField
							control={form.control}
							name="ideaOpinion"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.opinion_label}</FormLabel>
									<FormControl>
										<Textarea
											rows={3}
											placeholder={fDict.opinion_placeholder}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<FormField
								control={form.control}
								name="usefulness"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.usefulness_label}</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={sDict.select_placeholder} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="very_useful">
													{sDict.usefulness.very_useful}
												</SelectItem>
												<SelectItem value="useful">
													{sDict.usefulness.useful}
												</SelectItem>
												<SelectItem value="neutral">
													{sDict.usefulness.neutral}
												</SelectItem>
												<SelectItem value="not_useful">
													{sDict.usefulness.not_useful}
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="personalUse"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.personal_use_label}</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={sDict.select_placeholder} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="yes">{sDict.yes}</SelectItem>
												<SelectItem value="maybe">{sDict.maybe}</SelectItem>
												<SelectItem value="no">{sDict.no}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="neighborhoodUse"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.neighbor_use_label}</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={sDict.select_placeholder} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="yes">{sDict.yes}</SelectItem>
												<SelectItem value="maybe">{sDict.maybe}</SelectItem>
												<SelectItem value="no">{sDict.no}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					{/* Section 3: Problem & Relevance */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg border-b pb-2">
							{fDict.section3}
						</h3>
						<FormField
							control={form.control}
							name="lackConnection"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.lack_connection_label}</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder={sDict.select_placeholder} />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="yes">{sDict.yes}</SelectItem>
											<SelectItem value="no">{sDict.no}</SelectItem>
											<SelectItem value="not_sure">{sDict.not_sure}</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="featuresInterest"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.features_interest_label}</FormLabel>
									<div className="grid grid-cols-2 gap-2 mt-2">
										{IDEA_FEATURES.map((featureKey) => (
											<label
												key={featureKey}
												className="flex items-center space-x-2 text-sm cursor-pointer"
											>
												<input
													type="checkbox"
													className="rounded border-border text-wihda-blue focus:ring-wihda-blue"
													checked={field.value.includes(featureKey)}
													onChange={(e) => {
														const current = new Set(field.value);
														if (e.target.checked) current.add(featureKey);
														else current.delete(featureKey);
														field.onChange(Array.from(current));
													}}
												/>
												<span>
													{
														sDict.features[
															featureKey as keyof typeof sDict.features
														]
													}
												</span>
											</label>
										))}
									</div>
								</FormItem>
							)}
						/>
					</div>

					{/* Section 4: Improvements */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg border-b pb-2">
							{fDict.section4}
						</h3>
						<FormField
							control={form.control}
							name="improve"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.improve_label}</FormLabel>
									<FormControl>
										<Textarea rows={2} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="concerns"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.concerns_label}</FormLabel>
									<FormControl>
										<Textarea rows={2} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="suggestions"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fDict.suggestions_label}</FormLabel>
									<FormControl>
										<Textarea rows={2} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

					<Button
						type="submit"
						disabled={mutation.isPending}
						className="group w-full bg-wihda-blue hover:bg-wihda-blue/90 text-white font-bold text-lg py-6 rounded-lg shadow-lg shadow-wihda-blue/20 transition-all flex items-center justify-center gap-2"
					>
						{mutation.isPending ? fDict.btn_submitting : fDict.btn_submit}
					</Button>
				</form>
			</Form>
		</div>
	);
}

// ─── App Feedback Form ──────────────────────────────────────────────────────────

function AppFeedbackForm({ dict }: { dict: any }) {
	const fDict = dict.Feedback.AppForm;
	const sDict = dict.Feedback.Shared;

	const form = useForm<AppFeedbackValues>({
		resolver: zodResolver(appFeedbackSchema),
		defaultValues: {
			type: "app",
			name: "",
			featuresTried: [],
			bugDescription: "",
			dislikes: "",
			improveFirst: "",
			additional: "",
		},
	});

	const bugsEncountered = form.watch("bugsEncountered");

	const mutation = useMutation({
		mutationFn: submitFeedbackForm,
		onSuccess: () => {
			toast.success(fDict.toast_success);
			form.reset();
		},
		onError: () => toast.error(fDict.toast_error),
	});

	return (
		<div className="flex flex-col h-full mt-12 lg:mt-0">
			<div className="mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wihda-green/10 text-wihda-green text-xs font-bold uppercase tracking-wider mb-4">
					{fDict.badge}
				</div>
				<h2 className="text-3xl font-bold text-neutral-dark dark:text-white mb-3">
					{fDict.title}
				</h2>
				<p className="text-muted-foreground">{fDict.description}</p>
			</div>

			<div className="bg-white dark:bg-neutral-surface-dark/50 rounded-2xl p-0 lg:p-8 lg:-m-8 lg:border lg:border-border lg:shadow-sm">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
						className="space-y-8"
					>
						{/* Section 1: Basic Info */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg border-b pb-2">
								{fDict.section1}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.name_label}</FormLabel>
											<FormControl>
												<Input
													placeholder={fDict.name_placeholder}
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="device"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.device_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="android">
														{sDict.devices.android}
													</SelectItem>
													<SelectItem value="iphone">
														{sDict.devices.iphone}
													</SelectItem>
													<SelectItem value="web">
														{sDict.devices.web}
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{/* Section 2: Experience & Design */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg border-b pb-2">
								{fDict.section2}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<FormField
									control={form.control}
									name="experience"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.experience_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="excellent">
														{sDict.experience.excellent}
													</SelectItem>
													<SelectItem value="good">
														{sDict.experience.good}
													</SelectItem>
													<SelectItem value="average">
														{sDict.experience.average}
													</SelectItem>
													<SelectItem value="poor">
														{sDict.experience.poor}
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="easeOfUse"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.ease_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="very_easy">
														{sDict.ease.very_easy}
													</SelectItem>
													<SelectItem value="easy">
														{sDict.ease.easy}
													</SelectItem>
													<SelectItem value="difficult">
														{sDict.ease.difficult}
													</SelectItem>
													<SelectItem value="very_difficult">
														{sDict.ease.very_difficult}
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="navigation"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.nav_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="yes">
														{sDict.navigation.yes}
													</SelectItem>
													<SelectItem value="somewhat">
														{sDict.navigation.somewhat}
													</SelectItem>
													<SelectItem value="no">
														{sDict.navigation.no}
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="designFeedback"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.design_label}</FormLabel>
										<FormControl>
											<Textarea rows={2} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						{/* Section 3: Features & Bugs */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg border-b pb-2">
								{fDict.section3}
							</h3>
							<FormField
								control={form.control}
								name="featuresTried"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.features_tried_label}</FormLabel>
										<div className="grid grid-cols-2 gap-2 mt-2">
											{APP_FEATURES.map((featureKey) => (
												<label
													key={featureKey}
													className="flex items-center space-x-2 text-sm cursor-pointer"
												>
													<input
														type="checkbox"
														className="rounded border-border text-wihda-green focus:ring-wihda-green"
														checked={field.value.includes(featureKey)}
														onChange={(e) => {
															const current = new Set(field.value);
															if (e.target.checked) current.add(featureKey);
															else current.delete(featureKey);
															field.onChange(Array.from(current));
														}}
													/>
													<span>
														{
															sDict.features[
																featureKey as keyof typeof sDict.features
															]
														}
													</span>
												</label>
											))}
										</div>
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="worksExpected"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.works_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="yes">{sDict.works.yes}</SelectItem>
													<SelectItem value="mostly">
														{sDict.works.mostly}
													</SelectItem>
													<SelectItem value="no">{sDict.works.no}</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="bugsEncountered"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.bugs_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="yes">{sDict.yes}</SelectItem>
													<SelectItem value="no">{sDict.no}</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{bugsEncountered === "yes" && (
								<FormField
									control={form.control}
									name="bugDescription"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.bug_desc_label}</FormLabel>
											<FormControl>
												<Textarea rows={2} {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
							)}
						</div>

						{/* Section 4: Improvements & Final */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg border-b pb-2">
								{fDict.section4}
							</h3>
							<FormField
								control={form.control}
								name="dislikes"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.dislikes_label}</FormLabel>
										<FormControl>
											<Textarea rows={2} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="improveFirst"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.improve_first_label}</FormLabel>
										<FormControl>
											<Textarea rows={2} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="useRegularly"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.use_regularly_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="yes">{sDict.yes}</SelectItem>
													<SelectItem value="maybe">{sDict.maybe}</SelectItem>
													<SelectItem value="no">{sDict.no}</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="recommend"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{fDict.recommend_label}</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={sDict.select_placeholder}
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="yes">{sDict.yes}</SelectItem>
													<SelectItem value="maybe">{sDict.maybe}</SelectItem>
													<SelectItem value="no">{sDict.no}</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="additional"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fDict.additional_label}</FormLabel>
										<FormControl>
											<Textarea rows={2} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						<Button
							type="submit"
							disabled={mutation.isPending}
							className="group w-full bg-neutral-dark dark:bg-white hover:bg-neutral-dark/90 dark:hover:bg-white/90 text-white dark:text-neutral-dark font-bold text-lg py-6 rounded-lg shadow-lg shadow-neutral-dark/10 transition-all flex items-center justify-center gap-2"
						>
							{mutation.isPending ? fDict.btn_submitting : fDict.btn_submit}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}

// ─── Main Section ───────────────────────────────────────────────────────────────

export function FeedbackSection({ dict }: { dict: any }) {
	return (
		<section className="relative overflow-hidden" id="feedback">
			{/* Abstract Background Shapes */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
				<div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-wihda-blue/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten opacity-70"></div>
				<div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-wihda-green/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten opacity-70"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				<div className="text-center max-w-4xl mx-auto mb-20">
					<h1 className="text-5xl md:text-7xl font-semibold text-neutral-dark dark:text-white mb-6 tracking-tight leading-tight">
						{dict.Feedback.Section.title}
					</h1>
					<p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
						{dict.Feedback.Section.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
					<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border to-transparent transform -translate-x-1/2 h-full"></div>
					<IdeaFeedbackForm dict={dict} />
					<AppFeedbackForm dict={dict} />
				</div>
			</div>
		</section>
	);
}
