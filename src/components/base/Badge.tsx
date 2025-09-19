import { cn } from "@/lib/utils";

type BadgeProps = {
	value: string | number;
	mapping?: Record<number | string, string>;
	className?: string;
	size?: "sm" | "md" | "lg";
};

// Default numeric -> status mapping (assumption: common codes)
const defaultNumberMap: Record<number, string> = {
	1: "banned",
	2: "inactive",
	3: "success",
	4: "pending",
	5: "active",
};

// Map normalized status -> tailwind classes
const statusClassMap: Record<string, string> = {
	success: "bg-green-100 text-green-800",
	active: "bg-green-100 text-green-800",
	pending: "bg-yellow-100 text-yellow-800",
	processing: "bg-yellow-100 text-yellow-800",
	banned: "bg-red-100 text-red-800",
	inactive: "bg-gray-100 text-gray-700",
	cancelled: "bg-red-100 text-red-800",
	canceled: "bg-red-100 text-red-800",
	expired: "bg-orange-100 text-orange-800",
};

function normalizeStatus(s: string) {
	return s.trim().toLowerCase();
}

function prettyLabel(s: string) {
	if (!s) return "";
	return s
		.split(/[_\-\s]+/)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

export default function Badge({ value, mapping, className, size = "md" }: BadgeProps) {
	// Resolve to a string status
	let statusStr: string;

	if (typeof value === "number") {
		statusStr = (mapping && mapping[value]) ?? defaultNumberMap[value] ?? String(value);
	} else {
		statusStr = (mapping && mapping[value]) ?? value;
	}

	const key = normalizeStatus(String(statusStr));
	const variantClasses = statusClassMap[key] ?? "bg-muted text-muted-foreground";

	const sizeClasses =
		size === "sm" ? "text-xs px-2 py-0.5 rounded" : size === "lg" ? "text-sm px-3 py-1 rounded-md" : "text-sm px-2.5 py-1 rounded-md";

	return <span className={cn("inline-flex items-center font-medium", sizeClasses, variantClasses, className)}>{prettyLabel(String(statusStr))}</span>;
}
