import { DebateIcon, LiveIcon, PastIcon, UpcomingIcon } from "@/assets/icons";
import CustomCard from "@/components/base/CustomCard";
import { Button } from "@/components/ui/button";
import Badge from "@/components/base/Badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import StatCard from "@/components/base/StatCard";
import { Input } from "@/components/ui/input";
import { inputStyle, preTableButtonStyle } from "@/components/common/commonStyles";
import { FilterIcon, IconWrapper, SearchIcon, ThreeDotsIcon } from "@/assets/icons";
import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { _router } from "@/routes/_router";

type TicketItem = {
	id: string;
	sender: string;
	email: string;
	subject: string;
	date: string;
	status: string;
};

const sample: TicketItem[] = Array.from({ length: 22 }).map((_, i) => ({
	id: `#${1232 + i}`,
	sender: "Eddienwaneri",
	email: "eddienwaneri@example.com",
	subject: "Lorem ipsum ipsum",
	date: "2/1/2025",
	status: i % 3 === 0 ? "In Progress" : i % 3 === 1 ? "Upcoming" : "Resolved",
}));

export default function Debate() {
	const [q, setQ] = useState("");
	const [page, setPage] = useState(1);
	const [tab, setTab] = useState<"All" | "In Progress" | "Upcoming" | "Resolved">("All");
	const perPage = 8;

	const filtered = useMemo(() => {
		if (!q) return sample;
		return sample.filter((s) => [s.id, s.sender, s.email, s.subject].join(" ").toLowerCase().includes(q.toLowerCase()));
	}, [q]);

	const counts = useMemo(
		() => ({
			All: sample.length,
			"In Progress": sample.filter((s) => s.status === "In Progress").length,
			Upcoming: sample.filter((s) => s.status === "Upcoming").length,
			Resolved: sample.filter((s) => s.status === "Resolved").length,
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
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
				<StatCard title="Total Debates" value={1000} icon={<DebateIcon />} />
				<StatCard title="Live Debates" value={500} icon={<LiveIcon />} />
				<StatCard title="Upcoming Debates" value={300} icon={<UpcomingIcon />} />
				<StatCard title="Past Debates" value={300} icon={<PastIcon />} />
			</div>

			<CustomCard>
				<div className="flex items-center justify-between mb-5 gap-1.5">
					<div className="flex items-center gap-2">
						<div className="relative md:w-80">
							<Input
								placeholder="Search debate"
								aria-label="Search debate"
								value={q}
								onChange={(e) => {
									setQ(e.target.value);
									setPage(1);
								}}
								className={`max-w-[320px] ${inputStyle} h-10 pl-9`}
							/>
							<IconWrapper className="absolute top-1/2 -translate-y-1/2 opacity-50 left-5 -translate-x-1/2">
								<SearchIcon />
							</IconWrapper>
						</div>
						<button type="button" className={`${preTableButtonStyle} bg-(--primary-clr) ml-auto`}>
							<IconWrapper className="text-base">
								<FilterIcon />
							</IconWrapper>
							<span className="hidden sm:inline">Filter</span>
						</button>
					</div>
					<Link to={_router.admin.dashboard.debateAdd} className={`${preTableButtonStyle} bg-(--primary-clr)`}>
						<IconWrapper>
							<Plus size={16} />
						</IconWrapper>
						<span className="hidden sm:inline"> Create New </span>
					</Link>
				</div>
				<div className="flex flex-col gap-4">
					<Tabs
						value={tab}
						onValueChange={(v) => {
							setTab(v as any);
							setPage(1);
						}}>
						<div className="flex flex-col-reverse lg:flex-row xl:items-center justify-between gap-4 mb-4">
							<TabsList className="overflow-x-auto w-full max-w-xl h-fit rounded-md justify-start">
								<TabsTrigger value="All">Total Debates ({counts.All})</TabsTrigger>
								<TabsTrigger value="In Progress">Live Debates ({counts["In Progress"]})</TabsTrigger>
								<TabsTrigger value="Upcoming">Upcoming Debates ({counts.Upcoming})</TabsTrigger>
								<TabsTrigger value="Resolved">Past Debates ({counts.Resolved})</TabsTrigger>
							</TabsList>
						</div>
						<div className="w-full">
							{(["All", "In Progress", "Upcoming", "Resolved"] as const).map(
								(tabKey) =>
									tab === tabKey && (
										<div key={tabKey}>
											<Table>
												<TableHeader>
													<TableRow className="bg-zinc-100 dark:bg-neutral-800">
														<TableHead>S/N</TableHead>
														<TableHead>Debate</TableHead>
														<TableHead>Category</TableHead>
														<TableHead>Status</TableHead>
														<TableHead>Action</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{pageData.length === 0 ? (
														<TableRow>
															<TableCell colSpan={5} className="text-center">
																No debates found.
															</TableCell>
														</TableRow>
													) : (
														pageData.map((row, i) => (
															<TableRow key={row.id}>
																<TableCell>{(page - 1) * perPage + i + 1}</TableCell>
																<TableCell>{row.subject}</TableCell>
																<TableCell>{row.sender}</TableCell>
																<TableCell>
																	<Badge
																		value={row.status}
																		size="sm"
																		className={
																			row.status === "In Progress"
																				? "bg-green-100 text-green-800"
																				: row.status === "Upcoming"
																				? "bg-yellow-100 text-yellow-800"
																				: "bg-red-100 text-red-800"
																		}
																	/>
																</TableCell>
																<TableCell>
																	<div className="flex items-center gap-2">
																		<Button variant="ghost" size="sm">
																			<IconWrapper>
																				<ThreeDotsIcon />
																			</IconWrapper>
																		</Button>
																		{/* Popover menu would go here */}
																	</div>
																</TableCell>
															</TableRow>
														))
													)}
												</TableBody>
											</Table>
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
									)
							)}
						</div>
					</Tabs>
				</div>
			</CustomCard>
		</div>
	);
}
