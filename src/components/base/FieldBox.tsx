import { IconWrapper } from "@/assets/icons";
import React from "react";

export default function FieldBox({ label, children, icon }: { label: string; children: React.ReactNode; icon?: React.ReactNode }) {
	return (
		<div className="bg-zinc-50 dark:bg-neutral-800 rounded-md p-4 flex items-start gap-4">
			<div className="w-10 h-10 rounded-md border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 flex items-center justify-center">
				<IconWrapper>{icon}</IconWrapper>
			</div>
			<div className="flex-1">
				<div className="text-sm font-medium text-stone-500 mb-1">{label}</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
