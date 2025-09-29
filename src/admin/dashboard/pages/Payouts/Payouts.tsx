import { CheckIcon, CloseIcon, EyeIcon, FilterIcon, IconWrapper, SearchIcon, ThreeDotsIcon } from "@/assets/icons";
import CustomCard from "@/components/base/CustomCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import { useMemo, useState } from "react";
import { inputStyle, preTableButtonStyle } from "@/components/common/commonStyles";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Badge from "@/components/base/Badge";
import { Filter, ViewIcon } from "lucide-react";
import { Link } from "react-router";
import { _router } from "@/routes/_router";


type PayoutItem = {
	id: string;
	sender: string;
	email: string;
	earnings: number;
	date: string;
	status: string;
};

const statuses = ["In Progress", "Unread", "Resolved", "Rejected"];


const sample: PayoutItem[] = Array.from({ length: 22 }).map((_, i) => ({
	id: `${1 + i}`,
	sender: "Eddienwaneri",
	email: "eddienwaneri@example.com",
	earnings: 18.75,
	date: "2/1/2025",
	status: statuses[i % statuses.length],
}));



const payoutStats = [
	{
		title: "All Payouts",
		value: 200
	},
	{
		title: "Pending Payouts",
		value: 100
	},
	{
		title: "Completed Payouts",
		value: 50
	},
	{
		title: "Rejected Payouts",
		value: 50
	}
]



export default function Payouts() {
	const [q, setQ] = useState("");
	const [page, setPage] = useState(1);
	const [tab, setTab] = useState<"All" | "In Progress" | "Unread" | "Resolved" | "Rejected">("All");
	const perPage = 9;

	const filtered = useMemo(() => {
			if (!q) return sample;
			return sample.filter((s) => [s.id, s.sender, s.email, s.earnings].join(" ").toLowerCase().includes(q.toLowerCase()));
		}, [q]);
	
		const counts = useMemo(
			() => ({
				All: sample.length,
				"In Progress": sample.filter((s) => s.status === "In Progress").length,
				Unread: sample.filter((s) => s.status === "Unread").length,
				Resolved: sample.filter((s) => s.status === "Resolved").length,
				Rejected: sample.filter((s) => s.status === "Rejected").length,
			}),
			[]
		);
	
		const tabFiltered = useMemo(() => {
			if (tab === "All") return filtered;
			return filtered.filter((s) => s.status === tab);
		}, [tab, filtered]);
	
		const total = tabFiltered.length;
		const pages = Math.max(1, Math.ceil(total / perPage));
		const pageData = tabFiltered.slice((page - 1) * perPage, page * perPage);

	return (
		<div className="px-2 py-5">
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-5">
				{
					payoutStats.map((stat) => (
						<div key={stat.title} className="border border-[#E3E3E3] rounded-lg py-6 px-5 h-auto flex flex-col  gap-2">
							<span className="text-[#888888]">{stat.title}</span>
							<p className="text-2xl font-bold">{stat.value}</p>
						</div>
					))
				}
			</div>

			
			<CustomCard>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col-reverse lg:flex-row xl:items-center justify-between gap-4 mb-4">
						<Tabs
							value={tab}
							onValueChange={(v) => {
								setTab(v as any);
								setPage(1);
							}}>
							<TabsList className="overflow-x-auto w-full max-w-md md:max-w-lg h-fit rounded-md justify-start">
								<TabsTrigger value="All">All Payouts</TabsTrigger>
								<TabsTrigger value="In Progress"> Pending Payouts</TabsTrigger>
								<TabsTrigger value="Resolved">Completed Payouts</TabsTrigger>
								<TabsTrigger value="Rejected">Rejected Payouts</TabsTrigger>
							</TabsList>
						</Tabs>

						<div className="flex items-center gap-2">
							<div className="relative w-80">
								<Input
									placeholder="Search Payouts"
									aria-label="search payouts"
									value={q}
									onChange={(e) => {
										setQ(e.target.value);
										setPage(1);
									}}
									className={`max-w-[320px] ${inputStyle} h-10 pl-9 rounded-xl`}
								/>
								<IconWrapper className="absolute top-1/2 -translate-y-1/2 opacity-50 left-5 -translate-x-1/2">
									<SearchIcon />
								</IconWrapper>
							</div>

							<button type="button" className={`${preTableButtonStyle} bg-[#fff] border !rounded-xl `}>
								<IconWrapper className="text-[12px] text-gray-500">
									<Filter />
								</IconWrapper>
								<span className="hidden sm:inline">Filter</span>
							</button>
						</div>
					</div>

					<div>
						<Table>
							<TableHeader>
								<TableRow className="bg-zinc-100 dark:bg-neutral-800">
									<TableHead>S/N</TableHead>
									<TableHead>Creator</TableHead>
									<TableHead>Email Address</TableHead>
									<TableHead>Earnings</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Action</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{pageData.map((row) => (
									<TableRow key={row.id}>
										<TableCell>
											<div className="font-medium">{row.id}</div>
										</TableCell>
										<TableCell>{row.sender}</TableCell>
										<TableCell className="text-sm text-gray-500">{row.email}</TableCell>
										<TableCell>${row.earnings}</TableCell>
										<TableCell>{row.date}</TableCell>
										<TableCell>
											<Badge
												value={row.status}
												size="lg"
												mapping={{
													"In Progress": "processing",
													Unread: "Pending",
													Resolved: "Completed",
													Rejected: "Rejected",
												}}
											/>
										</TableCell>
										<TableCell>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" size="sm">
														<IconWrapper>
															<ThreeDotsIcon />
														</IconWrapper>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem
														asChild>
														<Link to={_router.admin.dashboard.payoutDetails.replace(":id", row.id)} className="cursor-pointer" >
															<IconWrapper className="text-lg">
																<EyeIcon />
															</IconWrapper>
															<span>View </span>
														</Link>
													</DropdownMenuItem>
													<DropdownMenuItem className="cursor-pointer">
														<IconWrapper className="text-lg">
															<CheckIcon />
														</IconWrapper>
														<span>Approve</span>
													</DropdownMenuItem>
													<DropdownMenuItem className="cursor-pointer">
														<IconWrapper className="text-lg">
															<CloseIcon />
														</IconWrapper>
														<span>Reject</span>
													</DropdownMenuItem>

												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>

					<div className="pt-2">
						<Pagination aria-label="pagination" className="mt-2 justify-end">
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />
								</PaginationItem>

								{Array.from({ length: pages }).map((_, i) => (
									<PaginationItem key={i}>
										<PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>
											{i + 1}
										</PaginationLink>
									</PaginationItem>
								))}

								<PaginationItem>
									<PaginationNext onClick={() => setPage((p) => Math.min(pages, p + 1))} />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			</CustomCard>

		</div>
	);
}
