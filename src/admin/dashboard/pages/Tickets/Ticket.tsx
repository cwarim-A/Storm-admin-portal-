import { useMemo, useState } from "react";
import CustomCard from "@/components/base/CustomCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Badge from "@/components/base/Badge";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import StatCard from "@/components/base/StatCard";
import { Input } from "@/components/ui/input";
import { inputStyle, preTableButtonStyle } from "@/components/common/commonStyles";
import { FilterIcon, IconWrapper, SearchIcon, ThreeDotsIcon } from "@/assets/icons";

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
	status: i % 3 === 0 ? "In Progress" : i % 3 === 1 ? "Unread" : "Resolved",
}));

export default function Ticket() {
	const [q, setQ] = useState("");
	const [page, setPage] = useState(1);
	const [tab, setTab] = useState<"All" | "In Progress" | "Unread" | "Resolved">("All");
	const perPage = 8;

	const filtered = useMemo(() => {
		if (!q) return sample;
		return sample.filter((s) => [s.id, s.sender, s.email, s.subject].join(" ").toLowerCase().includes(q.toLowerCase()));
	}, [q]);

	const counts = useMemo(
		() => ({
			All: sample.length,
			"In Progress": sample.filter((s) => s.status === "In Progress").length,
			Unread: sample.filter((s) => s.status === "Unread").length,
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
				<StatCard title="Total Tickets" value={1000} />
				<StatCard title="Unread Tickets" value={500} />
				<StatCard title="In Progress" value={300} />
				<StatCard title="Resolved Tickets" value={300} />
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
								<TabsTrigger value="All">Total Tickets ({counts.All})</TabsTrigger>
								<TabsTrigger value="In Progress">In Progress ({counts["In Progress"]})</TabsTrigger>
								<TabsTrigger value="Unread">Unread ({counts.Unread})</TabsTrigger>
								<TabsTrigger value="Resolved">Resolved ({counts.Resolved})</TabsTrigger>
							</TabsList>
						</Tabs>

						<div className="flex items-center gap-2">
							<div className="relative w-80">
								<Input
									placeholder="Search subscription by id, email, subscriber etc"
									aria-label="search tickets"
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

							<button type="button" className={`${preTableButtonStyle} bg-(--primary-clr)`}>
								<IconWrapper className="text-base">
									<FilterIcon />
								</IconWrapper>
								<span className="hidden sm:inline">Filter</span>
							</button>
						</div>
					</div>

					<div>
						<Table>
							<TableHeader>
								<TableRow className="bg-zinc-100 dark:bg-neutral-800">
									<TableHead>Ticket ID</TableHead>
									<TableHead>Sender</TableHead>
									<TableHead>Email Address</TableHead>
									<TableHead>Subject</TableHead>
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
										<TableCell>{row.subject}</TableCell>
										<TableCell>{row.date}</TableCell>
										<TableCell>
											<Badge
												value={row.status}
												size="sm"
												mapping={{
													"In Progress": "processing",
													Unread: "pending",
													Resolved: "success",
												}}
											/>
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<Button variant="ghost" size="sm">
													<IconWrapper>
														<ThreeDotsIcon />
													</IconWrapper>
												</Button>
											</div>
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
