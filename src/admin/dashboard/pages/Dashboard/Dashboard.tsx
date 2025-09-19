import { ChevronDownIcon, IconWrapper } from "@/assets/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import CustomCard from "@/components/base/CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ModalForTicket from "../../components/ModalForTicket";
import { UserStats } from "../../components/UserStats";
import { smBtnStyle } from "@/components/common/commonStyles";

export default function Dashboard() {
	const [selectedPeriod, setSelectedPeriod] = useState("Today");
	const [modalOpen, setModalOpen] = useState(false);
	const [activeTicket, setActiveTicket] = useState<any>(null);

	return (
		<div>
			<div className="mb-6">
				<p>Welcome to the admin dashboard.</p>
			</div>

			<UserStats />

			<div className="grid grid-cols-7 mt-4 gap-4">
				<aside className="col-span-full md:col-span-3">
					<CustomCard className="flex flex-col justify-between gap-y-5">
						<header className="text-start flex flex-col gap-y-1">
							<h2 className="text-[1.05rem] font-semibold">Recent Tickets</h2>
							<p className="text-sm text-black dark:text-gray-500">This shows the newest tickets raised</p>
						</header>
						<div>
							<ul className="flex flex-col gap-y-4">
								<li>
									<CustomCard className="flex flex-col gap-y-3">
										<header className="flex items-center justify-between">
											<h3 className="text-[.8rem] font-medium">#120</h3>
											<button
												type="button"
												className={`${twMerge(smBtnStyle)}`}
												onClick={() => {
													setActiveTicket({
														userName: "Eddie Mark",
														submitted: "Nov 14, 2021 08:00",
														subject: "Password reset not working",
														message:
															"Hi, I can't seem to update the app. It says 'Error checking updates' when I tried to update the app via Google Play. Pls help.",
													});
													setModalOpen(true);
												}}>
												Open
											</button>
										</header>
										<div className="flex flex-col gap-y-1">
											<h2 className="font-medium">Password reset not working</h2>
											<p className="text-sm dark:text-gray-400 text-gray-600 line-clamp-1">
												<span className="font-medium dark:text-gray-400 text-gray-800">Brief:</span> User is unable to reset their password despite
												following the instructions.
											</p>
											<div className="flex items-center justify-between gap-4">
												<div className="text-sm flex items-center gap-2">
													<span className="font-medium dark:text-gray-400 text-gray-800">User:</span>
													<Avatar className="w-6 h-6">
														<AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
														<AvatarFallback className="text-sm">CN</AvatarFallback>
													</Avatar>
													<span className="text-sm dark:text-gray-400 text-gray-800">chris.nolan</span>
												</div>
												<small className="text-xs  dark:text-gray-400 text-gray-600">10 Aug. 2025</small>
											</div>
										</div>
									</CustomCard>
								</li>
								<li>
									<CustomCard className="flex flex-col gap-y-3">
										<header className="flex items-center justify-between">
											<h3 className="text-[.8rem] font-medium">#120</h3>
											<button
												type="button"
												className="bg-(--primary-clr) text-[.8rem] rounded-sm py-1.5 px-2 text-black leading-tight active-scale flex"
												onClick={() => {
													setActiveTicket({
														userName: "Eddie Mark",
														submitted: "Nov 14, 2021 08:00",
														subject: "Password reset not working",
														message:
															"Hi, I can't seem to update the app. It says 'Error checking updates' when I tried to update the app via Google Play. Pls help.",
													});
													setModalOpen(true);
												}}>
												Open
											</button>
										</header>
										<div className="flex flex-col gap-y-1.5">
											<h2 className="font-medium">Password reset not working</h2>
											<p className="text-sm dark:text-gray-400 text-gray-600 line-clamp-1">
												<span className="font-medium dark:text-gray-400 text-gray-800">Brief:</span> User is unable to reset their password despite
												following the instructions.
											</p>
											<div className="flex items-center justify-between gap-4">
												<div className="text-sm flex items-center gap-2">
													<span className="font-medium dark:text-gray-400 text-gray-800">User:</span>
													<Avatar className="w-6 h-6">
														<AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
														<AvatarFallback className="text-sm">CN</AvatarFallback>
													</Avatar>
													<span className="text-sm dark:text-gray-400 text-gray-800">chris.nolan</span>
												</div>
												<small className="text-xs  dark:text-gray-400 text-gray-600">10 Aug. 2025</small>
											</div>
										</div>
									</CustomCard>
								</li>
							</ul>
						</div>
					</CustomCard>
				</aside>
				<aside className="col-span-full md:col-span-4">
					<CustomCard className="flex flex-col justify-between gap-y-5">
						<header className="flex items-center justify-between gap-4">
							<h2 className="text-[1.05rem] font-semibold">Trending Debates</h2>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button type="button" className="flex py-1.5 px-2 items-center gap-1 text-sm border rounded-sm">
										<span>{selectedPeriod}</span>
										<IconWrapper>
											<ChevronDownIcon />
										</IconWrapper>
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuCheckboxItem checked={selectedPeriod === "Today"} onCheckedChange={() => setSelectedPeriod("Today")}>
										Today
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem checked={selectedPeriod === "Last week"} onCheckedChange={() => setSelectedPeriod("Last week")}>
										Last week
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem checked={selectedPeriod === "Last month"} onCheckedChange={() => setSelectedPeriod("Last month")}>
										Last month
									</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</header>
						<CustomCard className="min-h-52 flex justify-center [&>*]:flex-1">
							{/* <div className="flex flex-col gap-y-3 items-center justify-center">
								<IconWrapper className="text-6xl dark:text-gray-300/20 text-gray-400">
									<EmptyBoxIcon />
								</IconWrapper>
								<div>
									<p className="dark:text-gray-400 text-sm md:text-base text-gray-400">No debates found</p>
								</div>
							</div> */}
							<ul>
								<CardItemRow type="General" title="User Feedback" />
								<CardItemRow type="Politics" title="Tinubu facing backlash over policies" />
							</ul>
						</CustomCard>
					</CustomCard>
				</aside>
			</div>

			{/* Modal */}
			<ModalForTicket open={modalOpen} onOpenChange={(v) => setModalOpen(v)} ticket={activeTicket} />
		</div>
	);
}

const CardItemRow = ({ type = "General", title = "" }: { type?: string; title?: string }) => {
	return (
		<li className="last:border-0 border-b border-solid dark:border-neutral-800 pt-2 pb-3.5 first:pt-0 flex flex-col gap-y-2 justify-between">
			<span className="text-sm text-gray-500">{type}</span>
			<div className="flex items-center justify-between">
				<h2>{title}</h2>
				<button type="button" className={`${twMerge(smBtnStyle, "ml-auto capitalize px-4")}`}>
					View
				</button>
			</div>
		</li>
	);
};
