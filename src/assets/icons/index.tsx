import type React from "react";
import { twMerge } from "tailwind-merge";

export const IconWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
	<span className={`${twMerge("text-lg", className)} flex items-center justify-center`}>{children}</span>
);

export const DashboardIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.7}>
			<circle cx={19} cy={5} r={2.5} strokeWidth={1.9}></circle>
			<path strokeLinecap="round" strokeWidth={1.9} d="M21.25 10v5.25a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6H14"></path>
			<path strokeLinecap="round" strokeWidth={1.6} d="M8.276 16.036v-4.388m3.83 4.388V8.769m3.618 7.267v-5.51"></path>
		</g>
	</svg>
);

export const UserTalkIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M8.5 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0m17.073-1.352l.497.867a7 7 0 0 1-.002 6.975l-.499.867l-1.733-.997l.498-.867a5 5 0 0 0 .002-4.982l-.498-.867zM17.538 7.39l.497.868a3.5 3.5 0 0 1 0 3.487l-.5.867l-1.733-.997l.498-.867a1.5 1.5 0 0 0 0-1.495l-.497-.867zM0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0z"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const UserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
			<circle cx={12} cy={7} r={4}></circle>
		</g>
	</svg>
);

export const UsersIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
		<path
			fill="currentColor"
			d="M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9m-.1-7.7q.15 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8S15 14 15 12.5c0-1.6 1.3-2.9 2.8-2.9"
			className="clr-i-outline clr-i-outline-path-1"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8q-.3 1.2-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8z"
			className="clr-i-outline clr-i-outline-path-2"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3"
			className="clr-i-outline clr-i-outline-path-3"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M12 16.4q-.6-.9-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2"
			className="clr-i-outline clr-i-outline-path-4"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4S9 6.3 10.3 6.3c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5s-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1"
			className="clr-i-outline clr-i-outline-path-5"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4z"
			className="clr-i-outline clr-i-outline-path-6"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path fill="none" d="M0 0h36v36H0z"></path>
	</svg>
);

export const DebateIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.6}
			d="M14 4h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
	</svg>
);

export const TicketIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.8}
			d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2"></path>
	</svg>
);

export const WarnIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55m-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12"
			strokeWidth={5}
			stroke="currentColor"></path>
	</svg>
);

export const ModeratorIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M11.46 1.137a1.75 1.75 0 0 1 1.08 0l8.25 2.675A1.75 1.75 0 0 1 22 5.476V10.5c0 6.19-3.77 10.705-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.771 21.204 2 16.69 2 10.5V5.476c0-.76.49-1.43 1.21-1.664Zm.617 1.426a.25.25 0 0 0-.154 0L3.673 5.24a.25.25 0 0 0-.173.237V10.5c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0c5.15-1.943 8.43-5.965 8.43-11.426V5.476a.25.25 0 0 0-.173-.237ZM13 12.232V15a1 1 0 0 1-2 0v-2.768a2 2 0 1 1 2 0"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const CardIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none">
			<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
			<path
				fill="currentColor"
				d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm1 6H4v7a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17zm-3 3a1 1 0 0 1 .117 1.993L17 15h-3a1 1 0 0 1-.117-1.993L14 13zm2-7H5a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1"></path>
		</g>
	</svg>
);

export const ProfitSharingIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
	</svg>
);

export const PayoutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9}>
			<path d="M.75 14.25v9m0-1.5h16.5a3 3 0 0 0-3-3H10.5a3 3 0 0 0-3-3H.75m6 3h3.75M6.63.75h15.24a1.4 1.4 0 0 1 1.38 1.41v8.68a1.4 1.4 0 0 1-1.38 1.41H6.63a1.4 1.4 0 0 1-1.38-1.41V2.16A1.4 1.4 0 0 1 6.63.75"></path>
			<path d="M12 6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0M8 4h1.5M19 9h1.5"></path>
		</g>
	</svg>
);

export const LogoutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></path>
	</svg>
);

export const SettingIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m21.32 9.55l-1.89-.63l.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89l-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89l-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78l-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63l-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89l.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89l1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78l1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95M20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14l-1.1 1.1l-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57l-1.1-1.1l.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11l1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57l1.1 1.1l-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4ZM12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></path>
	</svg>
);

export const NightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
		<path
			fill="#fcc21b"
			stroke="#fcc21b"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M28.053 4.41c-5.47 1.427-9.507 6.4-9.507 12.317c0 7.03 5.698 12.728 12.727 12.728c5.916 0 10.89-4.038 12.316-9.508A20 20 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z"></path>
	</svg>
);

export const DayIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
		<path
			fill="#fcc11a"
			d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12"
			strokeWidth={3}
			stroke="#fcc11a"></path>
		<path
			fill="#fee269"
			d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33"
			strokeWidth={3}
			stroke="#fee269"></path>
		<path
			fill="#ffa722"
			d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52s13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27m29.8 11.96c-1.81.56-1.76 1.67-.79 3.08s7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93m13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14s-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38M92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45m-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81M24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02s-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27m-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93m27.34-36.92c1.27-1.01.88-2.46-.26-3.25s-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52"
			strokeWidth={3}
			stroke="#ffa722"></path>
	</svg>
);

export const TrendUpIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"
			strokeWidth={1}
			stroke="currentColor"></path>
	</svg>
);

export const TrendDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M244 128v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h35l-67-67l-31.51 31.52a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L96 119l31.51-31.52a12 12 0 0 1 17 0L220 163v-35a12 12 0 0 1 24 0"
			strokeWidth={1}
			stroke="currentColor"></path>
	</svg>
);

export const BlockedUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx={9} cy={7} r={4}></circle>
			<path d="m17 8l5 5m0-5l-5 5"></path>
		</g>
	</svg>
);

export const ActiveUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx={9} cy={7} r={4}></circle>
		</g>
	</svg>
);

export const InactiveUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx={9} cy={7} r={4}></circle>
			<path d="M22 11h-6"></path>
		</g>
	</svg>
);

export const SuspendUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m3.5 2v5m4-5v5"></path>
	</svg>
);

export const WarnUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
			<path
				fill="currentColor"
				d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10M8 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0M4 18.5c0-.18.09-.489.413-.899c.316-.4.804-.828 1.451-1.222C7.157 15.589 8.977 15 11 15q.563 0 1.105.059a1 1 0 1 0 .211-1.99A13 13 0 0 0 11 13c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22l.685-.005a1 1 0 1 0-.027-2L11 20c-2.19 0-4.083-.143-5.4-.492c-.663-.175-1.096-.382-1.345-.582C4.037 18.751 4 18.622 4 18.5m12-.5a1 1 0 0 1 1-1h.99c.558 0 1.01.452 1.01 1.01v2.124A1 1 0 0 1 18.5 22h-.49A1.01 1.01 0 0 1 17 20.99V19a1 1 0 0 1-1-1m2-4a1 1 0 0 0-.117 1.993l.119.007a1 1 0 0 0 .117-1.993z"
				strokeWidth={0.1}
				stroke="currentColor"></path>
		</g>
	</svg>
);

export const ChevronDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 10l-5 5l-5-5"></path>
	</svg>
);

export const EmptyBoxIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
		<path
			fill="currentColor"
			d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4v2h8v-2Z"
			strokeWidth={0.2}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2 24H6V12h20Zm2-18H4V6h24z"
			strokeWidth={0.2}
			stroke="currentColor"></path>
	</svg>
);

export const UploadImageIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
			<path strokeLinejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></path>
			<path
				strokeLinejoin="round"
				d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></path>
			<path strokeMiterlimit={10} d="M18.707 15v5"></path>
			<path strokeLinejoin="round" d="m21 17.105l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></path>
		</g>
	</svg>
);

export const SubscriptionIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.9}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M3.171 12.79h2.5a.485.485 0 0 1 .5.523v9.41a.483.483 0 0 1-.5.522h-2.5"></path>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10.322 10.584L8.4 12.977a1.4 1.4 0 0 1-1.045.523H6.171m0 7.03c2.144 1.625 4.1 2.716 5.363 2.716h6.273c.76 0 1.238-.054 1.568-1.045c.504-2.53.853-5.088 1.046-7.66c0-.522-.523-1.045-1.568-1.045h-5.932m-2.367-1.291L9.006 1.373a.546.546 0 0 1 .54-.623H17.1"></path>
			<path strokeLinecap="round" strokeLinejoin="round" d="m13.839 13.5l-.916-9.159a.5.5 0 0 1 .5-.553h6.9a.5.5 0 0 1 .5.577l-1.38 9.2"></path>
			<path d="M16.696 9.37a.375.375 0 0 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></path>
		</g>
	</svg>
);

export const AllSubscriptionIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="currentColor" d="M20 8H4V6h16Zm-2-6H6v2h12Zm-7.688 19.1l-3.3-3.3l1.4-1.4l1.9 1.9l5.3-5.3l1.4 1.4Z"></path>
		<path fill="currentColor" d="M22 10H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m0 12H2V12h20Z"></path>
	</svg>
);

export const ActiveSubscriptionIcon = () => (
	// 	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	// 	<path fill="currentColor" d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"></path>
	// </svg>
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="m8 12.5l3 3l5-6"></path>
			<circle cx={12} cy={12} r={10}></circle>
		</g>
	</svg>
);

export const InactiveSubscriptionIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m2.7-6.3l12.6 12.6"></path>
	</svg>
);

export const CancelledSubscriptionIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.9}>
			<circle cx={12} cy={12} r={9.25}></circle>
			<path strokeLinecap="round" d="m8.875 8.875l6.25 6.25m0-6.25l-6.25 6.25"></path>
		</g>
	</svg>
);

export const SearchIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={10}
			strokeWidth={1.9}
			d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></path>
	</svg>
);

export const NotificationIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.9}
			d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525S10.41 2 12 2q.507 0 1 .09M19 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.27 13a2 2 0 0 1-3.46 0"></path>
	</svg>
);

export const EyeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.9}>
			<path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z"></path>
			<path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path>
		</g>
	</svg>
);

export const QuickViewIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39M40 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m162.92 58.39C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39M136 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></path>
	</svg>
);

export const ThreeDotsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
		<path
			fill="currentColor"
			d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></path>
	</svg>
);

export const PastIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="currentColor" d="M2 2h5v2H4v3H2zm9 0h5v5h-2V4h-3zM9 9h13v13H9zm2 2v9h9v-9zm-7-1v3h3v2H2v-5z"></path>
	</svg>
);

export const LiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0m12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415M9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0m6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414m-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
	</svg>
);

export const UpcomingIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M4 21q-.825 0-1.412-.587T2 19v-5q0-.825.588-1.412T4 12h4.15q.375 0 .65.25t.325.6q.125.85 1 1.5T12 15t1.875-.65t1-1.5q.05-.35.325-.6t.65-.25H20q.825 0 1.413.588T22 14v5q0 .825-.587 1.413T20 21zm0-2h16v-5h-3.4q-.625 1.375-1.862 2.188T12 17t-2.738-.812T7.4 14H4zm12.9-8.9q-.275-.275-.275-.7t.275-.7l2.15-2.15q.275-.275.7-.275t.7.275t.275.7t-.275.7L18.3 10.1q-.275.275-.7.275t-.7-.275m-9.8 0q-.275.275-.7.275t-.7-.275L3.55 7.95q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L7.1 8.7q.275.275.275.7t-.275.7M12 8q-.425 0-.713-.288T11 7V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8M4 19h16z"></path>
	</svg>
);

export const FilterIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
		<path
			fill="currentColor"
			d="M1 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
			strokeWidth={0.2}
			stroke="currentColor"></path>
	</svg>
);

export const CloseIcon = () => (
	<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="6" y1="6" x2="18" y2="18" />
	</svg>
);

export const MenuIcon = () => (
	<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
		<line x1="3" y1="12" x2="21" y2="12" />
		<line x1="3" y1="6" x2="21" y2="6" />
		<line x1="3" y1="18" x2="21" y2="18" />
	</svg>
);

export const AdminIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1.15em" height="1.15em" viewBox="0 0 24 24">
		<circle cx={17} cy={15.5} r={1.12} fill="currentColor" fillRule="evenodd"></circle>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.97 5.97 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></path>
	</svg>
);

export const ArrowLeftIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
			clipRule="evenodd"
			strokeWidth={0.5}
			stroke="currentColor"></path>
	</svg>
);

export const ChevronLeftIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
		<path
			fill="currentColor"
			d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06"
			strokeWidth={0.5}
			stroke="currentColor"></path>
	</svg>
);

export const MoneyIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
		<path
			fill="none"
			stroke="currentColor"
			d="M0 12.5h15m-15 2h15M2.5 4V2.5H4m7 0h1.5V4m-10 3v1.5H4m7 0h1.5V7m-5 .5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6-7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"
			strokeWidth={1}></path>
	</svg>
);

export const HoldingMoney = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth={0.5} stroke="currentColor">
			<path d="M7.36 13.855a.33.33 0 0 0-.4-.24H4.885a4.4 4.4 0 0 0-1.537.26a.28.28 0 0 0-.232.225a.3.3 0 0 0 .003.114a.28.28 0 0 0 .329.24a6 6 0 0 1 1.198.239q.289.024.579 0q.297-.002.589-.06q.673-.136 1.307-.4a.34.34 0 0 0 .24-.379m8.513 2.626a4.6 4.6 0 0 0-1.657-.06c0-.22-.05-.44-.08-.66c-.05-.398-.12-.788-.18-1.187h1.218a.28.28 0 0 0 .32-.25a.29.29 0 0 0-.25-.329l-1.177-.09h-.2c0-.27-.08-.529-.11-.798a.3.3 0 0 0-.294-.354a.3.3 0 0 0-.295.354c0 .3 0 .599-.05.898a4.6 4.6 0 0 0-2.126.929a1.43 1.43 0 0 0-.36 1.696c.16.35.44.63.79.789a3.1 3.1 0 0 0 1.387.24h.429c0 .18 0 .359.07.529c.07.399.16.798.24 1.187h-.53a4.3 4.3 0 0 1-2.016-.778a.334.334 0 0 0-.42.519a5.3 5.3 0 0 0 2.347.998c.289.05.579.07.858.09l.15.619a.33.33 0 0 0 .379.28a.34.34 0 0 0 .28-.39v-.52q.475-.02.938-.139a3.1 3.1 0 0 0 1.567-.998a1.39 1.39 0 0 0 .17-1.527a1.94 1.94 0 0 0-1.398-1.048m-3.124.09a2.2 2.2 0 0 1-.769-.05a.66.66 0 0 1-.449-.3c-.19-.37 0-.649.35-.878a4.1 4.1 0 0 1 1.207-.57v1.767zm3.324 1.996a2.4 2.4 0 0 1-.889.549q-.36.12-.738.16c0-.42 0-.839-.08-1.258v-.52q.474-.036.948 0a1.1 1.1 0 0 1 .998.52c.02.21-.09.4-.24.569z"></path>
			<path d="M20.576 16.12a5.4 5.4 0 0 0-.71-1.487a16 16 0 0 0-1.207-1.507c.402-.15.737-.436.948-.809a1.94 1.94 0 0 0 .07-1.677q.233-.1.43-.26a1.996 1.996 0 0 0 .09-2.594a1.32 1.32 0 0 0 .678-1.328a2.44 2.44 0 0 0-1.457-1.437a3 3 0 0 0-.61-.22q-.307-.09-.628-.12q-.96-.013-1.917.07l-.658.06a1 1 0 0 0-.19-.09l-.928-.24c-.26 0-.52-.11-.789-.14a4 4 0 0 0-.609 0a4.3 4.3 0 0 0-1.627.68c-1.108.738-2.455 1.856-2.864 2.206c-.29.213-.639.335-.999.349H5.693a.28.28 0 0 0-.3.27a.29.29 0 0 0 .28.309c.774.103 1.556.136 2.336.1a2.4 2.4 0 0 0 1.068-.38c.409-.27 1.507-1.068 2.525-1.706c.468-.36 1-.627 1.567-.789q.2-.022.4 0c.239 0 .479.09.708.13l.719.21c.28.1.479.209.519.389s-.1.29-.33.449a2.6 2.6 0 0 1-.888.439q-.541.13-1.098.17a.49.49 0 0 0-.46.509q.015.12 0 .24a2.7 2.7 0 0 1-.588 1.906a3.25 3.25 0 0 1-2.096.998a.33.33 0 0 0-.29.37a.32.32 0 0 0 .3.289c-.42.549-.809 1.108-1.178 1.687q-.675 1.063-1.228 2.196a11 11 0 0 0-.649 1.747a6.6 6.6 0 0 0-.24 1.267a4.18 4.18 0 0 0 1.468 3.384a9 9 0 0 0 4.851 2.166a8.47 8.47 0 0 0 5.24-.998a5.36 5.36 0 0 0 2.556-4.672a5.7 5.7 0 0 0-.06-1.088a9 9 0 0 0-.25-1.048m-1.717-4.272a1 1 0 0 1-1.148.32a3.85 3.85 0 0 1-1.837-.66a.84.84 0 0 1-.42-.808a.84.84 0 0 1 .2-.38l.08-.059q.324.17.67.29a6.7 6.7 0 0 0 1.666.339q.503.027.998-.06a1.18 1.18 0 0 1-.21 1.018m.609-2.236a1.1 1.1 0 0 1-.44.14q-.444.045-.888 0a8 8 0 0 1-1.417-.26a4.6 4.6 0 0 1-.73-.22c.17-.149-.049-.688.1-.997q.086-.256.25-.47c.371.213.777.358 1.198.43a4.8 4.8 0 0 0 1.897 0l.14-.05c.132.186.214.402.239.629a1 1 0 0 1-.35.798M17.99 5.65l.998.369c.315.124.589.335.789.609c.09.13 0 .26-.23.409l-.339.18c-.492.16-1.01.224-1.527.19a3.1 3.1 0 0 1-.889-.2a.3.3 0 0 0-.299-.19l-.12-.08c.222-.282.322-.641.28-.998a1.7 1.7 0 0 0-.14-.37q.74.003 1.477.08m-.25 16.39a7.5 7.5 0 0 1-4.59.778a8.14 8.14 0 0 1-4.213-1.827a3.32 3.32 0 0 1-1.258-2.535a5.6 5.6 0 0 1 .23-1.377q.201-.704.509-1.368q.473-1.12 1.078-2.176a23 23 0 0 1 1.337-1.996a.3.3 0 0 0 0-.12a3.66 3.66 0 0 0 1.907-.998c.577-.62.904-1.43.918-2.276a5.7 5.7 0 0 0 1.108-.18q.42-.128.799-.35a2.6 2.6 0 0 0-.36.6c-.177.39-.25.82-.21 1.248q.02.176.11.329l-.09.06c-.168.16-.295.358-.369.579a1.63 1.63 0 0 0 .52 1.856a4.6 4.6 0 0 0 2.305.999q.2.015.4 0c.459.588.948 1.147 1.337 1.766c.25.402.439.84.559 1.298q.125.491.17.998q.037.469 0 .938a4.52 4.52 0 0 1-2.156 3.753zM11.652 3.114l.459.889a.29.29 0 0 0 .4.11a.3.3 0 0 0 .12-.4l-.34-.818l-.11-.58c0-.409 0-.598.19-.648c.247-.022.496.012.728.1c.375.114.767.161 1.158.14q.276-.057.52-.2c.199-.12.398-.29.608-.43s.14-.15.22-.13s.13.14.2.22q.142.215.309.41q.167.185.389.3c.52.133 1.072.057 1.537-.21c.17-.07.33-.15.49-.2h.11q.06.25.059.509l-.14.679l-.39.838a.34.34 0 0 0 .09.46a.318.318 0 0 0 .46-.13l.529-.919l.26-.858a1.49 1.49 0 0 0-.23-1.298a1.34 1.34 0 0 0-1.368-.09l-.638.17c-.11 0-.2.08-.28 0s-.16-.21-.25-.34a2 2 0 0 0-.399-.459a1.2 1.2 0 0 0-.469-.2a1.13 1.13 0 0 0-.699.06q-.395.181-.728.46q-.174.169-.4.26a3.4 3.4 0 0 1-.998-.08a2.1 2.1 0 0 0-.998.06c-.43.17-.818.558-.659 1.577z"></path>
		</g>
	</svg>
);

export const SquigglyCheckIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33c-1.06-2.56-1.14-7.83-1.21-12.47c-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21c-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34c-2.56 1.06-7.83 1.14-12.47 1.21c-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47c-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33c1.06 2.56 1.14 7.83 1.21 12.47c.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21c2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34c2.56-1.06 7.83-1.14 12.47-1.21c10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47c1.19-2.87 4.82-6.66 8.34-10.33c6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95m-17.32 39.29c-4.82 5-10.28 10.72-13.19 17.76c-2.82 6.8-2.93 14.16-3 21.29c-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3c-7 2.91-12.73 8.37-17.76 13.19c-3.6 3.45-8.98 8.61-11.38 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19c-6.8-2.82-14.16-2.93-21.29-3c-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29c-2.91-7-8.37-12.73-13.19-17.76C41.16 135.78 36 130.4 36 128s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.19-17.76c2.82-6.8 2.93-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3c7-2.91 12.73-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.19c6.8 2.82 14.16 2.93 21.29 3c5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29c2.91 7 8.37 12.73 13.19 17.76c3.41 3.56 8.57 8.94 8.57 11.34s-5.12 7.82-8.53 11.38m-34.94-43.83a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03"
			strokeWidth={0.8}
			stroke="currentColor"></path>
	</svg>
);

export const DownloadReceiptIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
			<path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-4v-6"></path>
			<path d="M9.5 14.5L12 17l2.5-2.5"></path>
		</g>
	</svg>
);

export const ViewIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
)

export const SuspendIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-pause-icon lucide-circle-pause"><circle cx="12" cy="12" r="10" /><line x1="10" x2="10" y1="15" y2="9" /><line x1="14" x2="14" y1="15" y2="9" /></svg>
)

export const ModeratorWarnIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
)


export const BanIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ban-icon lucide-ban"><path d="M4.929 4.929 19.07 19.071" /><circle cx="12" cy="12" r="10" /></svg>
)

export const AddIcon = ()=> (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
)

export const EditIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
)

export const DeleteIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2 text-red-600"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
)

export const PermissionIcon = ()=>(
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
)