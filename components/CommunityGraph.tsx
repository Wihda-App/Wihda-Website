"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// --- Types ---
interface NodeData {
	id: number;
	x: number;
	y: number;
	group: number;
	label: string;
	description: string;
	img: string;
	color: string;
}

// --- Constants & Data ---
const AVATARS = [
	// ... (omitted for brevity, keeping same)
	"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
	"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=faces",
];
const COLORS = [
	"bg-primary",
	"bg-secondary",
	"bg-primary-dark",
	"bg-accent-green",
	"bg-wihda-blue",
	"bg-wihda-green",
	"bg-primary",
	"bg-secondary",
	"bg-primary-dark",
	"bg-wihda-blue",
	"bg-accent-green",
	"bg-wihda-green",
];
const FEATURES = [
	{
		label: "Amira B.",
		desc: "Led 12 campaigns · Algiers",
	},
	{
		label: "Youcef K.",
		desc: "150+ volunteer hours · Oran",
	},
	{
		label: "Lina M.",
		desc: "8 local initiatives · Constantine",
	},
	{
		label: "Karim D.",
		desc: "45 cleanify reports · Tizi Ouzou",
	},
	{
		label: "Salma H.",
		desc: "300+ youth engaged · Annaba",
	},
	{
		label: "Redouane F.",
		desc: "Mentored 20 leaders · Blida",
	},
	{
		label: "Nadia T.",
		desc: "5 park cleanups · Bejaia",
	},
	{
		label: "Mehdi A.",
		desc: "Built community tools · Setif",
	},
	{
		label: "Fatima Z.",
		desc: "Food drive organizer · Jijel",
	},
	{
		label: "Omar S.",
		desc: "Street art project · Mostaganem",
	},
	{
		label: "Tawfik R.",
		desc: "Youth forum lead · Batna",
	},
	{
		label: "Amine L.",
		desc: "Tree planting drive · Chlef",
	},
];
const STATS = [
	{
		value: "2,400+",
		label: "Active Members",
		icon: "people",
	},
	{
		value: "180+",
		label: "Neighborhoods",
		icon: "location_on",
	},
	{
		value: "12K+",
		label: "Actions Taken",
		icon: "bolt",
	},
	{
		value: "4.9",
		label: "App Rating",
		icon: "star",
	},
];

// --- Sub-Component: Bubble Node ---
interface NodeProps {
	data: NodeData;
	sizeFactor: number;
	isSelected: boolean;
	onSelect: (id: number) => void;
	offsetX: number;
	offsetY: number;
	dict: any;
}
const BubbleNode: React.FC<NodeProps> = ({
	data,
	sizeFactor,
	isSelected,
	onSelect,
	offsetX,
	offsetY,
	dict,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Medium node size
	const baseSize = 80;

	// Calculate final size based on proximity factor
	// Hovering slightly boosts size but main driver is position
	// When selected => override to 5x
	const visualScale = isSelected
		? 5
		: isHovered
			? sizeFactor * 1.1
			: sizeFactor;
	const size = baseSize * visualScale;

	// Opacity fades slightly at edges to enhance depth
	const opacity = isSelected ? 1 : Math.max(0.4, Math.min(1, sizeFactor + 0.2));
	return (
		<div
			className="absolute rounded-full shadow-xl cursor-pointer flex items-center justify-center will-change-transform"
			style={{
				width: size,
				height: size,
				transform: "translate(-50%, -50%)",
				left: data.x + offsetX,
				top: data.y + offsetY,
				zIndex: isSelected ? 50 : Math.floor(sizeFactor * 100),
				opacity: opacity,
				transition: isSelected
					? "width 0.5s cubic-bezier(0.34,1.56,0.64,1), height 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, left 0.5s cubic-bezier(0.34,1.56,0.64,1), top 0.5s cubic-bezier(0.34,1.56,0.64,1)"
					: "opacity 0.3s ease, left 0.5s cubic-bezier(0.34,1.56,0.64,1), top 0.5s cubic-bezier(0.34,1.56,0.64,1)",
			}}
			onClick={(e) => {
				e.stopPropagation();
				onSelect(data.id);
			}}
			onDragStart={(e) => e.preventDefault()}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`w-full h-full rounded-full overflow-hidden ${data.color} p-1 relative group`}
			>
				{/* Inner circle */}
				<div className="w-full h-full rounded-full bg-background overflow-hidden relative">
					<img
						src={data.img}
						alt={data.label}
						className="w-full h-full object-cover pointer-events-none"
						loading="lazy"
						draggable="false"
					/>

					{/* Hover / Selected Overlay */}
					<div
						className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] flex flex-col items-center justify-center p-2 text-center transition-opacity duration-200 ${isSelected || isHovered ? "opacity-100" : "opacity-0"}`}
					>
						<h3
							className={`text-white font-bold leading-tight drop-shadow-md ${isSelected ? "text-4xl mb-4" : "text-xs sm:text-sm mb-1"}`}
						>
							{data.label}
						</h3>
						<p
							className={`text-gray-200 leading-tight drop-shadow-sm font-medium ${isSelected ? "text-lg" : "text-[8px] sm:text-[9px] line-clamp-3"}`}
						>
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// --- Main Component ---
export const CommunityGraph = ({ dict }: { dict: any }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dragOffset, setDragOffset] = useState({
		x: 0,
		y: 0,
	});
	const [driftOffset, setDriftOffset] = useState({
		x: 0,
		y: 0,
	});
	const [isDragging, setIsDragging] = useState(false);

	// Combined viewport = drag + drift
	const viewport = {
		x: dragOffset.x + driftOffset.x,
		y: dragOffset.y + driftOffset.y,
	};
	const [dragStart, setDragStart] = useState({
		x: 0,
		y: 0,
	});
	const [nodes, setNodes] = useState<NodeData[]>([]);
	const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
	const [containerWidth, setContainerWidth] = useState(650);

	// --- Layout Algorithm: Hexagonal Spiral (Honeycomb) ---
	useEffect(() => {
		const newNodes: NodeData[] = [];

		// Spacing between node centers
		const spacing = 150;
		let count = 0;

		// Helper to add a node
		const addNode = (x: number, y: number) => {
			newNodes.push({
				id: count,
				x,
				y,
				group: count % 3,
				label: FEATURES[count % FEATURES.length].label,
				description: FEATURES[count % FEATURES.length].desc,
				img: AVATARS[count % AVATARS.length],
				color: COLORS[count % COLORS.length],
			});
			count++;
		};

		// Center Node
		addNode(0, 0);

		// Ring 1 (6 nodes)
		for (let i = 0; i < 6; i++) {
			const angle = (Math.PI / 3) * i;
			addNode(Math.cos(angle) * spacing, Math.sin(angle) * spacing);
		}

		// Ring 2 (12 nodes)
		// Corners of Ring 2
		for (let i = 0; i < 6; i++) {
			const angle = (Math.PI / 3) * i;
			// Corner
			const cornerX = Math.cos(angle) * spacing * 2;
			const cornerY = Math.sin(angle) * spacing * 2;
			addNode(cornerX, cornerY);

			// Midpoint
			const midAngle = angle + Math.PI / 6;
			const midDist = spacing * Math.sqrt(3);
			addNode(Math.cos(midAngle) * midDist, Math.sin(midAngle) * midDist);
		}

		// Cap at 19 nodes (1 + 6 + 12) for perfect hexagon
		setNodes(newNodes);
	}, []);

	// --- Auto-Drift: single permanent RAF loop using refs ---
	const isDraggingRef = useRef(false);
	const selectedNodeIdRef = useRef<number | null>(null);
	const driftAngleRef = useRef(0);
	const lastFrameRef = useRef(0);
	const hasDraggedRef = useRef(false);
	const cooldownUntilRef = useRef(0); // timestamp when drift can resume

	// Keep refs in sync with state
	useEffect(() => {
		isDraggingRef.current = isDragging;
	}, [isDragging]);
	useEffect(() => {
		selectedNodeIdRef.current = selectedNodeId;
	}, [selectedNodeId]);

	// Single RAF loop — never restarts, reads state from refs
	useEffect(() => {
		let frameId: number;
		const DRIFT_RADIUS = 150;
		const DRIFT_SPEED = 0.0003; // radians per ms

		const animate = (timestamp: number) => {
			if (!lastFrameRef.current) lastFrameRef.current = timestamp;
			const dt = timestamp - lastFrameRef.current;
			lastFrameRef.current = timestamp;

			// Only drift when NOT dragging, NO node selected, AND cooldown expired
			if (
				!isDraggingRef.current &&
				selectedNodeIdRef.current === null &&
				timestamp > cooldownUntilRef.current
			) {
				driftAngleRef.current += dt * DRIFT_SPEED;
				setDriftOffset({
					x: Math.cos(driftAngleRef.current) * DRIFT_RADIUS,
					y: Math.sin(driftAngleRef.current) * DRIFT_RADIUS,
				});
			}
			frameId = requestAnimationFrame(animate);
		};
		frameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frameId);
	}, []); // Empty deps — never restarts

	// Track container size for dynamic fade edges
	useEffect(() => {
		if (!containerRef.current) return;
		const ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setContainerWidth(entry.contentRect.width);
			}
		});
		ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, []);

	// --- Interaction Handlers ---
	const handleDragStart = (x: number, y: number) => {
		setIsDragging(true);
		hasDraggedRef.current = false; // Reset: hasn't moved yet
		setDragStart({
			x,
			y,
		});
	};
	const handleDragMove = (x: number, y: number) => {
		if (!isDragging) return;
		const dx = x - dragStart.x;
		const dy = y - dragStart.y;

		// Mark as actual drag if mouse moved more than 3px
		if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
			hasDraggedRef.current = true;
		}

		// Reduced pan limit to match smaller circular canvas
		const PAN_LIMIT = 300;
		setDragOffset((prev) => ({
			x: Math.max(-PAN_LIMIT, Math.min(PAN_LIMIT, prev.x + dx)),
			y: Math.max(-PAN_LIMIT, Math.min(PAN_LIMIT, prev.y + dy)),
		}));
		setDragStart({
			x,
			y,
		});
	};
	const handleDragEnd = () => {
		setIsDragging(false);
		// Only cooldown if we actually dragged
		if (hasDraggedRef.current) {
			cooldownUntilRef.current = performance.now() + 3000;
			hasDraggedRef.current = false;
		}
	};

	// Container click: deselect only if user didn't drag
	const handleContainerClick = () => {
		if (!hasDraggedRef.current) {
			setSelectedNodeId(null);
		}
	};

	// Touch
	const onTouchStart = (e: React.TouchEvent) =>
		handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
	const onTouchMove = (e: React.TouchEvent) =>
		handleDragMove(e.touches[0].clientX, e.touches[0].clientY);

	// Mouse
	const onMouseDown = (e: React.MouseEvent) =>
		handleDragStart(e.clientX, e.clientY);
	const onMouseMove = (e: React.MouseEvent) =>
		handleDragMove(e.clientX, e.clientY);

	// --- Scaling Logic (The "Lens" Effect) ---
	const getDistanceFromCenter = (nodeX: number, nodeY: number) => {
		// Distance from the node to the CENTER OF THE VIEWPORT
		const visualX = nodeX + viewport.x;
		const visualY = nodeY + viewport.y;
		return Math.sqrt(visualX * visualX + visualY * visualY);
	};
	const getSizeFactor = (dist: number) => {
		// Max scale at center (0 distance)
		const MAX_SCALE = 1.8;
		const MIN_SCALE = 0.8;

		// Tighter lens = more visible effect
		const LENS_RADIUS = 350;
		if (dist > LENS_RADIUS) return MIN_SCALE;

		// Cosine interpolation for smooth, bell-curve shape
		const ratio = dist / LENS_RADIUS;
		const curve = Math.cos(ratio * (Math.PI / 2));
		return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * curve;
	};

	// --- Neighbor Repulsion: push other nodes away from selected ---
	const getRepulsionOffset = useCallback(
		(node: NodeData) => {
			if (selectedNodeId === null || selectedNodeId === node.id)
				return {
					ox: 0,
					oy: 0,
				};
			const selected = nodes.find((n) => n.id === selectedNodeId);
			if (!selected)
				return {
					ox: 0,
					oy: 0,
				};
			const dx = node.x - selected.x;
			const dy = node.y - selected.y;
			const dist = Math.sqrt(dx * dx + dy * dy) || 1;

			// Push threshold: the expanded node is ~800px wide, so push within 500px
			// Push threshold: the expanded node is ~800px wide, so push within 500px
			const PUSH_THRESHOLD = 450;
			if (dist >= PUSH_THRESHOLD)
				return {
					ox: 0,
					oy: 0,
				};
			const pushStrength = (PUSH_THRESHOLD - dist) * 0.4;
			const angle = Math.atan2(dy, dx);
			return {
				ox: Math.cos(angle) * pushStrength,
				oy: Math.sin(angle) * pushStrength,
			};
		},
		[selectedNodeId, nodes],
	);
	return (
		<section className="relative py-16 md:py-24 overflow-hidden bg-background-light dark:bg-background-dark">
			{/* Background decorations */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-10 md:mb-14 relative z-20 bg-transparent backdrop-blur-2xl rounded-none p-8  max-w-4xl  mx-auto">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20 mb-5">
						<span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
						{dict.PUSH_THRESHOLD.text_1}
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-3">
						{dict.PUSH_THRESHOLD.text_2}{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							{dict.PUSH_THRESHOLD.text_3}
						</span>
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
						{dict.PUSH_THRESHOLD.text_4}
					</p>
				</div>

				{/* Circular Grid Container — blends with page background */}
				<div
					ref={containerRef}
					className="relative w-full max-w-[650px] aspect-square mx-auto rounded-full  cursor-grab active:cursor-grabbing touch-none select-none"
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={handleDragEnd}
					onMouseLeave={handleDragEnd}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={handleDragEnd}
					onClick={handleContainerClick}
				>
					{/* Subtle radial gradient in center */}
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-primary/8 to-transparent rounded-full pointer-events-none" />

					{/* Movable Canvas */}
					<div
						className="absolute left-1/2 top-1/2 will-change-transform"
						style={{
							transform: `translate(${viewport.x}px, ${viewport.y}px)`,
							transition: isDragging
								? "none"
								: selectedNodeId !== null
									? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
									: "none",
						}}
					>
						{nodes.map((node) => {
							const dist = getDistanceFromCenter(node.x, node.y);
							const sizeFactor = getSizeFactor(dist);
							const { ox, oy } = getRepulsionOffset(node);

							// Dynamic Fade: Start fading at 75% of radius, fully transparent at edge (100%)
							const maxRadius = containerWidth / 2;
							const fadeStart = maxRadius * 0.75;
							const fadeEnd = maxRadius; // Fully transparent at edge of container

							const edgeFade =
								selectedNodeId === node.id
									? 1
									: Math.max(
											0,
											Math.min(
												1,
												1 - (dist - fadeStart) / (fadeEnd - fadeStart),
											),
										);
							return (
								<span
									key={node.id}
									style={{
										opacity: edgeFade,
									}}
								>
									<BubbleNode
										data={node}
										sizeFactor={sizeFactor}
										isSelected={selectedNodeId === node.id}
										onSelect={(id) =>
											setSelectedNodeId((prev) => (prev === id ? null : id))
										}
										offsetX={ox}
										offsetY={oy}
										dict={dict}
									/>
								</span>
							);
						})}
					</div>

					{/* UI Overlay pill */}
					<div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-foreground/5 backdrop-blur-md px-5 py-2 rounded-full text-xs font-medium text-muted-foreground border border-border pointer-events-none flex items-center gap-2">
						<span className="material-icons text-sm">
							{dict.PUSH_THRESHOLD.text_5}
						</span>
						{dict.PUSH_THRESHOLD.text_6}
					</div>
				</div>

				{/* Stats row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16">
					<Card className="hover:shadow-soft-hover hover:border-primary/30 transition-all duration-300">
						<CardContent className="p-5 sm:p-6 text-center">
							<span className="material-icons text-4xl text-primary mx-auto mb-2">
								{dict.PUSH_THRESHOLD.text_7}
							</span>
							<div className="text-2xl sm:text-3xl font-extrabold text-foreground mb-0.5">
								{dict.PUSH_THRESHOLD.text_8}
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground font-medium">
								{dict.PUSH_THRESHOLD.text_9}
							</div>
						</CardContent>
					</Card>
					<Card className="hover:shadow-soft-hover hover:border-primary/30 transition-all duration-300">
						<CardContent className="p-5 sm:p-6 text-center">
							<span className="material-icons text-4xl text-primary mx-auto mb-2">
								{dict.PUSH_THRESHOLD.text_10}
							</span>
							<div className="text-2xl sm:text-3xl font-extrabold text-foreground mb-0.5">
								{dict.PUSH_THRESHOLD.text_11}
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground font-medium">
								{dict.PUSH_THRESHOLD.text_12}
							</div>
						</CardContent>
					</Card>
					<Card className="hover:shadow-soft-hover hover:border-primary/30 transition-all duration-300">
						<CardContent className="p-5 sm:p-6 text-center">
							<span className="material-icons text-4xl text-primary mx-auto mb-2">
								{dict.PUSH_THRESHOLD.text_13}
							</span>
							<div className="text-2xl sm:text-3xl font-extrabold text-foreground mb-0.5">
								{dict.PUSH_THRESHOLD.text_14}
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground font-medium">
								{dict.PUSH_THRESHOLD.text_15}
							</div>
						</CardContent>
					</Card>
					<Card className="hover:shadow-soft-hover hover:border-primary/30 transition-all duration-300">
						<CardContent className="p-5 sm:p-6 text-center">
							<span className="material-icons text-4xl text-primary mx-auto mb-2">
								{dict.PUSH_THRESHOLD.text_16}
							</span>
							<div className="text-2xl sm:text-3xl font-extrabold text-foreground mb-0.5">
								{dict.PUSH_THRESHOLD.text_17}
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground font-medium">
								{dict.PUSH_THRESHOLD.text_18}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* CTA */}
				<div className="text-center mt-10 md:mt-14">
					<p className="text-sm text-muted-foreground mb-5">
						{dict.PUSH_THRESHOLD.text_19}
					</p>
					<Button
						asChild
						size="lg"
						className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
					>
						<Link href="/download">
							<span className="material-icons mr-2">
								{dict.PUSH_THRESHOLD.text_20}
							</span>
							{dict.PUSH_THRESHOLD.text_21}
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
