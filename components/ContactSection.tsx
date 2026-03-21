"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
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
import {
	citizenSchema,
	partnerSchema,
	type CitizenFormValues,
	type PartnerFormValues,
	type ContactPayload,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

// ─── Shared API call ────────────────────────────────────────────────────────────

async function submitContactForm(payload: ContactPayload) {
	const res = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	const result = await res.json();
	if (!result.success)
		throw new Error(result.message || "Something went wrong");
	return result;
}

// ─── Citizen Form ───────────────────────────────────────────────────────────────

function CitizenForm({ dict }: { dict: any }) {
	const form = useForm<CitizenFormValues>({
		resolver: zodResolver(citizenSchema),
		defaultValues: {
			name: "",
			email: "",
			topic: undefined,
			message: "",
		},
	});
	const mutation = useMutation({
		mutationFn: (data: CitizenFormValues) =>
			submitContactForm({
				type: "citizen",
				...data,
			}),
		onSuccess: (result) => {
			toast.success(result.message);
			form.reset();
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return (
		<div className="flex flex-col h-full">
			<div className="mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wihda-blue/10 text-wihda-blue text-xs font-bold uppercase tracking-wider mb-4">
					{dict.CitizenForm.text_1}
				</div>
				<h2 className="text-3xl font-bold text-neutral-dark dark:text-white mb-3">
					{dict.CitizenForm.text_2}
				</h2>
				<p className="text-muted-foreground">{dict.CitizenForm.text_3}</p>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
					className="space-y-6 flex-grow"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										{dict.CitizenForm.text_4}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={dict.ContactForms.citizen_name_placeholder}
											className="h-12 bg-white dark:bg-neutral-surface-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										{dict.CitizenForm.text_5}
									</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder={dict.ContactForms.citizen_email_placeholder}
											className="h-12 bg-white dark:bg-neutral-surface-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="topic"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
									{dict.CitizenForm.text_6}
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="h-12 w-full bg-white dark:bg-neutral-surface-dark border-2 border-border focus:border-wihda-blue text-start">
											<SelectValue
												placeholder={
													dict.ContactForms.citizen_topic_placeholder
												}
											/>
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="account">
											{dict.CitizenForm.text_7}
										</SelectItem>
										<SelectItem value="bug">
											{dict.CitizenForm.text_8}
										</SelectItem>
										<SelectItem value="feedback">
											{dict.CitizenForm.text_9}
										</SelectItem>
										<SelectItem value="other">
											{dict.CitizenForm.text_10}
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
									{dict.CitizenForm.text_11}
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder={dict.ContactForms.citizen_message_placeholder}
										rows={5}
										className="bg-white dark:bg-neutral-surface-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20 resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="pt-4">
						<Button
							type="submit"
							disabled={mutation.isPending}
							className="group w-full bg-wihda-blue hover:bg-wihda-blue/90 text-white font-bold text-lg py-6 rounded-lg shadow-lg shadow-wihda-blue/20 transition-all flex items-center justify-center gap-2"
						>
							{mutation.isPending
								? dict.ContactForms.citizen_btn_sending
								: dict.ContactForms.citizen_btn_send}
							{!mutation.isPending && (
								<span className="material-icons text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
									{dict.CitizenForm.text_12}
								</span>
							)}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

// ─── Partner Form ───────────────────────────────────────────────────────────────

function PartnerForm({ dict }: { dict: any }) {
	const form = useForm<PartnerFormValues>({
		resolver: zodResolver(partnerSchema),
		defaultValues: {
			organization: "",
			contactPerson: "",
			email: "",
			proposal: "",
		},
	});
	const mutation = useMutation({
		mutationFn: (data: PartnerFormValues) =>
			submitContactForm({
				type: "partner",
				...data,
			}),
		onSuccess: (result) => {
			toast.success(result.message);
			form.reset();
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return (
		<div className="flex flex-col h-full mt-12 lg:mt-0">
			<div className="mb-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wihda-green/10 text-wihda-green text-xs font-bold uppercase tracking-wider mb-4">
					{dict.PartnerForm.text_1}
				</div>
				<h2 className="text-3xl font-bold text-neutral-dark dark:text-white mb-3">
					{dict.PartnerForm.text_2}
				</h2>
				<p className="text-muted-foreground">{dict.PartnerForm.text_3}</p>
			</div>

			<div className="bg-white dark:bg-neutral-surface-dark/50 rounded-2xl p-0 lg:p-8 lg:-m-8 lg:border lg:border-border lg:shadow-sm">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="organization"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										{dict.PartnerForm.text_4}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={dict.ContactForms.partner_org_placeholder}
											className="h-12 bg-background-light dark:bg-background-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="contactPerson"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
											{dict.PartnerForm.text_5}
										</FormLabel>
										<FormControl>
											<Input
												placeholder={dict.ContactForms.partner_name_placeholder}
												className="h-12 bg-background-light dark:bg-background-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
											{dict.PartnerForm.text_6}
										</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder={
													dict.ContactForms.partner_email_placeholder
												}
												className="h-12 bg-background-light dark:bg-background-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="proposal"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										{dict.PartnerForm.text_7}
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder={
												dict.ContactForms.partner_proposal_placeholder
											}
											rows={4}
											className="bg-background-light dark:bg-background-dark border-2 border-border focus-visible:border-wihda-blue focus-visible:ring-wihda-blue/20 resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="pt-4">
							<Button
								type="submit"
								disabled={mutation.isPending}
								className="group w-full bg-neutral-dark dark:bg-white hover:bg-neutral-dark/90 dark:hover:bg-white/90 text-white dark:text-neutral-dark font-bold text-lg py-6 rounded-lg shadow-lg shadow-neutral-dark/10 transition-all flex items-center justify-center gap-2"
							>
								{mutation.isPending
									? dict.ContactForms.partner_btn_submitting
									: dict.ContactForms.partner_btn_submit}
								{!mutation.isPending && (
									<span className="material-icons text-wihda-green group-hover:scale-110 transition-transform">
										{dict.PartnerForm.text_8}
									</span>
								)}
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}

// ─── Main Section ───────────────────────────────────────────────────────────────

export function ContactSection({ dict }: { dict: any }) {
	return (
		<section className="relative overflow-hidden" id="contact">
			{/* Abstract Background Shapes */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
				<div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-wihda-blue/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten opacity-70"></div>
				<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-wihda-green/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten opacity-70"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				{/* Header Section */}
				<div className="text-center max-w-4xl mx-auto mb-20">
					<h1 className="text-5xl md:text-7xl font-semibold text-neutral-dark dark:text-white mb-6 tracking-tight leading-tight">
						{dict.ContactSection.text_1}
					</h1>
					<p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
						{dict.ContactSection.text_2}
					</p>
				</div>

				{/* Dual Form Container */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
					{/* Vertical Divider (Desktop Only) */}
					<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2 h-full"></div>

					<CitizenForm dict={dict} />
					<PartnerForm dict={dict} />
				</div>

				{/* Trust/Info Bar */}
				<div className="mt-24 pt-12 border-t border-border">
					<div
						className={cn(
							"grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left",
							dict.TEXT_DIRECTION == "rtl" && "md:text-right",
						)}
					>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-12 h-12 rounded-full bg-wihda-blue/10 flex items-center justify-center text-wihda-blue">
								<span className="material-icons">
									{dict.ContactSection.text_3}
								</span>
							</div>
							<div>
								<h3 className="font-bold text-neutral-dark dark:text-white">
									{dict.ContactSection.text_4}
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									{dict.ContactSection.text_5}
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-12 h-12 rounded-full bg-wihda-blue/10 flex items-center justify-center text-wihda-blue">
								<span className="material-icons">
									{dict.ContactSection.text_6}
								</span>
							</div>
							<div>
								<h3 className="font-bold text-neutral-dark dark:text-white">
									{dict.ContactSection.text_7}
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									{dict.ContactSection.text_8}
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0 w-12 h-12 rounded-full bg-wihda-green/10 flex items-center justify-center text-wihda-green">
								<span className="material-icons">
									{dict.ContactSection.text_9}
								</span>
							</div>
							<div>
								<h3 className="font-bold text-neutral-dark dark:text-white">
									{dict.ContactSection.text_10}
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									{dict.ContactSection.text_11}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
