
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Filter } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
	BanIcon,
	IconWrapper,
	ModeratorWarnIcon,
	SuspendIcon,
	ThreeDotsIcon,
	ViewIcon,
} from "@/assets/icons";
import { Link } from "react-router";
import { _router } from "@/routes/_router";
import { useState } from "react";
import { BanModeratorModal, SuspendModeratorModal, WarnModeratorModal } from "./ModeratorModal";



export default function Moderators() {
	const [page, setPage] = useState(1);
	const [suspendModeratorModalOpen,setSuspendModeratorModalOpen] = useState(false);
	const [warnModeratorModalOpen,setWarnModeratorModalOpen] = useState(false);
	const [banModeratorModalOpen,setBanModeratorModalOpen] = useState(false);

	const pageData = Array.from({ length: 9 }, (_, i) => ({
		id: `${i + 1}`,
		serial_number: `#${i + 1}`,
		username: "Eddienwaneri",
		email: "eddienwaneri@example.com",
		dateJoined: "2/1/2025",
	}));

	const pages = Math.ceil(pageData.length / 10);

	return (
		<div className="py-5">
			<div className=" border border-[#E3E3E3] rounded-xl h-auto w-[95%] px-5 py-5 flex flex-col gap-5 ">
				<div className="flex gap-5">
					<div className="flex items-center border w-fit px-3 py-2 rounded-2xl ">
						<input type="text" placeholder="search Debate" className="outline-none" />
						<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
					</div>
					<div className="flex items-center border w-fit px-3 py-2 rounded-2xl gap-3">
						<Filter className="h-5 w-5 text-gray-500" />
						<span className="text-gray-500">Filter</span>
					</div>
				</div>
				<Table>
					<TableHeader>
						<TableRow className="bg-zinc-100 dark:bg-neutral-800">
							<TableHead>S/N</TableHead>
							<TableHead>Username</TableHead>
							<TableHead>Email Address</TableHead>
							<TableHead>Date joined</TableHead>
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{pageData.map((row, index) => (
							<TableRow key={row.id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{row.username}</TableCell>
								<TableCell className="text-sm text-gray-500">{row.email}</TableCell>
								<TableCell>{row.dateJoined}</TableCell>
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
												<Link to={_router.admin.dashboard.moderatorDetails.replace(":id", row.id)} className="cursor-pointer" >
												<IconWrapper className="text-lg">
													<ViewIcon />
												</IconWrapper>
												<span>View Moderator details</span>
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => setSuspendModeratorModalOpen(true)}>
												
													<IconWrapper className="text-lg">
														<SuspendIcon />
													</IconWrapper>
													<span>Suspend Moderator</span>
												
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => setWarnModeratorModalOpen(true)}>
												<IconWrapper className="text-lg">
													<ModeratorWarnIcon />
												</IconWrapper>
												<span>Warn Moderator</span>
											</DropdownMenuItem>
											<DropdownMenuItem className="cursor-pointer" onClick={() => setBanModeratorModalOpen(true)}>
												<IconWrapper className="text-lg">
													<BanIcon/>
												</IconWrapper>
												<span>Ban Moderator</span>
											</DropdownMenuItem>
											
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
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

			<SuspendModeratorModal open={suspendModeratorModalOpen} onOpenChange={setSuspendModeratorModalOpen} />
			<WarnModeratorModal open={warnModeratorModalOpen} onOpenChange={setWarnModeratorModalOpen} />
			<BanModeratorModal open={banModeratorModalOpen} onOpenChange={setBanModeratorModalOpen} />
		</div>
	);
}
