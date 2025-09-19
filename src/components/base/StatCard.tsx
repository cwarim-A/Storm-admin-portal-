import React from "react";
import { IconWrapper, TrendUpIcon, TrendDownIcon } from "../../assets/icons";
import { Skeleton } from "../ui/skeleton";

interface StatCardProps {
	title: string;
	value: string | number;
	change?: string;
	trend?: "up" | "down";
	icon?: React.ReactNode;
	className?: string;
	loading?: boolean;
}

export default function StatCard({ title, value, change, trend, icon, className = "", loading }: StatCardProps) {
	return (
		<div
			className={`bg-white w-full dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 flex flex-col justify-between min-w-[180px] min-h-32 ${className}`}>
			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</h3>
				</div>
				{icon && (
					<IconWrapper className="text-2xl">
						<span className="ml-2">{icon}</span>
					</IconWrapper>
				)}
			</div>
			{loading ? (
				<Skeleton className="w-full bg-gray-100 dark:bg-gray-100/20 h-7 rounded-xs" />
			) : (
				<>
					{value && (
						<div
							className={`flex items-center justify-between mt-2 ${
								trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
							}`}>
							<div className="text-2xl font-bold text-black dark:text-white">{value}</div>
							{change && (
								<span className="text-xs font-semibold flex items-center gap-1">
									{change}
									{trend && (
										<IconWrapper>
											{trend === "up" && <TrendUpIcon />}
											{trend === "down" && <TrendDownIcon />}
										</IconWrapper>
									)}
								</span>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
}
