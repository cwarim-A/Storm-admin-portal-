import { useLocation } from "react-router";
import { _router } from "../routes/_router";
import { useTheme } from "../lib/ThemeProvider";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuCheckboxItem,
} from "../components/ui/dropdown-menu";
import { DayIcon, IconWrapper, LogoutIcon, MenuIcon, NightIcon, NotificationIcon, SearchIcon, SettingIcon, UserIcon } from "../assets/icons";

interface AdminDashboardHeaderProps {
	onSidebarOpen: () => void;
	onLogoutOpen?: () => void;
}

export default function AdminDashboardHeader({ onSidebarOpen, onLogoutOpen }: AdminDashboardHeaderProps) {
	const { pathname } = useLocation();
	const { theme, toggle } = useTheme();

	const titleMap: Record<string, string> = {
		[_router.admin.dashboard.index]: "Dashboard",
		[_router.admin.dashboard.debate]: "Debate",
		[_router.admin.dashboard.users]: "Users",
		[_router.admin.dashboard.debateCategory]: "Debate Category",
		[_router.admin.dashboard.ticket]: "Ticket",
		[_router.admin.dashboard.moderators]: "Moderators",
		[_router.admin.dashboard.subscriptions]: "Subscriptions",
		[_router.admin.dashboard.subscriptionHistory]: "Subscription History",
		[_router.admin.dashboard.debateAdd]: "Debate Add",
		[_router.admin.dashboard.debateEdit]: "Debate Edit",
		[_router.admin.dashboard.payouts]: "Payouts",
		[_router.admin.dashboard.profitSharing]: "Profit Sharing",
	};

	// pick best match (longest key that pathname startsWith)
	let title = "";
	Object.keys(titleMap)
		.sort((a, b) => b.length - a.length)
		.some((key) => {
			if (pathname === key || pathname.startsWith(key + "/") || pathname.startsWith(key)) {
				title = titleMap[key];
				return true;
			}
			return false;
		});

	if (!title) title = "Dashboard";

	return (
		<div className="bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 p-4 flex items-center justify-between sticky top-0 z-2">
			<div className="flex items-center gap-4">
				<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 xl:hidden" onClick={onSidebarOpen} aria-label="Open sidebar">
					<IconWrapper>
						<MenuIcon />
					</IconWrapper>
				</button>
				<h1 className="text-base sm:text-lg font-semibold">{title}</h1>
			</div>
			<div className="flex items-center gap-3">
				<button className="p-2.5 rounded-full bg-gray-100 dark:text-gray-400 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
					<IconWrapper>
						<NotificationIcon />
					</IconWrapper>
				</button>
				<button className="p-2.5 rounded-full bg-gray-100 dark:text-gray-400 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
					<IconWrapper>
						<SearchIcon />
					</IconWrapper>
				</button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className="p-2.5 rounded-full bg-gray-100 dark:text-gray-400 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
							<IconWrapper>
								<UserIcon />
							</IconWrapper>
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer hover:bg-gray-50 bg-transparent">
							<IconWrapper>
								<UserIcon />
							</IconWrapper>
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer hover:bg-gray-50 bg-transparent">
							<IconWrapper>
								<SettingIcon />
							</IconWrapper>
							<span>Settings</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuLabel>Theme</DropdownMenuLabel>
						<DropdownMenuCheckboxItem
							className="cursor-pointer"
							indicatorPosition="right"
							checked={theme === "light"}
							onCheckedChange={() => theme === "dark" && toggle()}>
							<IconWrapper>
								<DayIcon />
							</IconWrapper>
							<span>Light Theme</span>
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							className="cursor-pointer"
							indicatorPosition="right"
							checked={theme === "dark"}
							onCheckedChange={() => theme === "light" && toggle()}>
							<IconWrapper>
								<NightIcon />
							</IconWrapper>
							<span>Dark Theme</span>
						</DropdownMenuCheckboxItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-2 w-full text-red-600 dark:text-red-400" onSelect={() => onLogoutOpen?.()}>
							<IconWrapper>
								<LogoutIcon />
							</IconWrapper>
							<span>Logout</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
