import { twMerge } from "tailwind-merge";

export default function CustomCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
	return (
		<div className={`${twMerge("bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 h-full", className)}`}>
			{children}
		</div>
	);
}
