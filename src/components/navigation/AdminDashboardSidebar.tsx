import { _router } from "@/routes/_router";
import Image from "../base/Image";
import { media } from "@/resources/images";
import { NavLink } from "react-router";
import {
	AdminIcon,
	CloseIcon,
	DashboardIcon,
	DayIcon,
	DebateIcon,
	IconWrapper,
	LogoutIcon,
	ModeratorIcon,
	NightIcon,
	PayoutIcon,
	ProfitSharingIcon,
	SettingIcon,
	SubscriptionIcon,
	TicketIcon,
	UsersIcon,
	UserTalkIcon,
} from "@/assets/icons";
import { useTheme } from "@/lib/ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { switchStyle } from "@/components/common/commonStyles";

export default function AdminDashboardSidebar({ onClose, onLogoutOpen }: { onClose: () => void; onLogoutOpen?: () => void }) {
	const { theme, toggle } = useTheme();
	return (
		<div className="flex flex-col h-full gap-y-4">
			<header className="relative flex items-center justify-center">
				<button
					type="button"
					className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white p-2 xl:hidden"
					onClick={onClose}
					aria-label="Close sidebar">
					<IconWrapper>
						<CloseIcon />
					</IconWrapper>
				</button>
				<Image src={theme === "dark" ? media.logos.whiteLogo ?? media.logos.darkLogo : media.logos.darkLogo} className="w-28 mx-auto" />
			</header>
			<div className="overflow-y-auto flex flex-grow flex-col gap-y-4 mt-1">
				<ul className="flex flex-col items-start gap-y-0.5 w-full">
					{links.map((link) => (
						<li key={link.linkname} className="w-full">
							<NavLink
								end={link.path === _router.admin.dashboard.index}
								to={link.path}
								onClick={onClose}
								className={({ isActive }) =>
									`flex w-full items-center text-start gap-x-4 py-2.5 px-4 rounded-sm active-scale transition-colors ${
										isActive ? "bg-(--primary-clr) dark:text-black" : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
									}`
								}>
								<IconWrapper className="text-[1.35rem]">
									<link.icon />
								</IconWrapper>
								<span className="font-medium text-sm">{link.linkname}</span>
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="flex flex-col items-start">
					<li className="flex w-full items-center text-start gap-x-4 py-3 px-4 rounded-sm transition-colors justify-between">
						<div className="flex items-center gap-3">
							<IconWrapper>{theme === "dark" ? <NightIcon /> : <DayIcon />}</IconWrapper>
							<span className="flex text-sm font-medium items-center gap-2">{theme === "dark" ? "Dark Theme" : "Light Theme"}</span>
						</div>
						<Switch checked={theme === "dark"} onCheckedChange={toggle} className={`${switchStyle}`} />
					</li>

					<li className="flex w-full items-center text-start gap-x-4 rounded-sm transition-colors justify-between">
						<button
							type="button"
							onClick={() => onLogoutOpen?.()}
							className="w-full text-red-500 flex items-center gap-x-3 hover:bg-red-100 dark:hover:bg-red-500 dark:hover:text-white active-scale py-3 px-4 rounded-sm">
							<IconWrapper className="text-[1.35rem]">
								<LogoutIcon />
							</IconWrapper>
							<span className="font-medium text-sm">Logout</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

const links = [
	{
		icon: DashboardIcon,
		linkname: "Dashboard",
		path: _router.admin.dashboard.index,
	},
	{
		icon: UserTalkIcon,
		linkname: "Debate",
		path: _router.admin.dashboard.debate,
	},
	{
		icon: UsersIcon,
		linkname: "Users",
		path: _router.admin.dashboard.users,
	},
	{
		icon: DebateIcon,
		linkname: "Debate Category",
		path: _router.admin.dashboard.debateCategory,
	},
	{
		icon: TicketIcon,
		linkname: "Ticket",
		path: _router.admin.dashboard.ticket,
	},
	{
		icon: ModeratorIcon,
		linkname: "Moderators",
		path: _router.admin.dashboard.moderators,
	},
	{
		icon: AdminIcon,
		linkname: "Admin",
		path: _router.admin.dashboard.admin,
	},
	{
		icon: SubscriptionIcon,
		linkname: "Subscriptions",
		path: _router.admin.dashboard.subscriptions,
	},
	{
		icon: PayoutIcon,
		linkname: "Payouts",
		path: _router.admin.dashboard.payouts,
	},
	{
		icon: ProfitSharingIcon,
		linkname: "Profit Sharing",
		path: _router.admin.dashboard.profitSharing,
	},
	{
		icon: SettingIcon,
		linkname: "Settings",
		path: _router.admin.dashboard.settings,
	},
];
