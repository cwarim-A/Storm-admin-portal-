
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Edit, Filter } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
    AddIcon,
    DeleteIcon,
    EditIcon,
    IconWrapper,
    PermissionIcon,
    ThreeDotsIcon,
} from "@/assets/icons";
import { AddNewAdminModal,EditAdminModal } from "./AdminModal";


import { useState } from "react";
// import { BanModeratorModal, SuspendModeratorModal, WarnModeratorModal } from "./ModeratorModal";



export default function Admin() {
    // const [page, setPage] = useState(1);
    const [addNewAdminModalOpen, setAddNewAdminModalOpen] = useState(false);
    const [editAdminModalOpen, setEditAdminModalOpen] = useState(false);
    // const [warnModeratorModalOpen, setWarnModeratorModalOpen] = useState(false);
    // const [banModeratorModalOpen, setBanModeratorModalOpen] = useState(false);

    const pageData = Array.from({ length: 8 }, (_, i) => ({
        id: `${i + 1}`,
        serial_number: `#${i + 1}`,
        username: "Eddienwaneri",
        email: "eddienwaneri@example.com",
        dateJoined: "2/1/2025",
    }));

    // const pages = Math.ceil(pageData.length / 10);

    return (
        <div className="py-5">
            <div className=" border border-[#E3E3E3] rounded-xl h-auto w-[95%] px-5 py-5 flex flex-col gap-5 ">
                <div className="flex gap-5">
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
                    <Button onClick={() => setAddNewAdminModalOpen(true)} variant={"secondary"} className="ml-auto bg-[#FEDE2B] rounded-3xl py-6">
                        <IconWrapper>
                            <AddIcon/>
                        </IconWrapper>
                        Add Admin
                    </Button>
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
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => setEditAdminModalOpen(true)} >

                                                <IconWrapper className="text-lg">
                                                    <EditIcon/>
                                                </IconWrapper>
                                                <span>Edit</span>

                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer" >
                                                <IconWrapper className="text-lg">
                                                    <DeleteIcon/>
                                                </IconWrapper>
                                                <span>Delete</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer" >
                                                <IconWrapper className="text-lg">
                                                    <PermissionIcon/>
                                                </IconWrapper>
                                                <span>Manage Permission</span>
                                            </DropdownMenuItem>

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* <div className="pt-2">
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
                </div> */}
            </div>

            {/* <SuspendModeratorModal open={suspendModeratorModalOpen} onOpenChange={setSuspendModeratorModalOpen} />
            <WarnModeratorModal open={warnModeratorModalOpen} onOpenChange={setWarnModeratorModalOpen} />
            <BanModeratorModal open={banModeratorModalOpen} onOpenChange={setBanModeratorModalOpen} /> */}
            <AddNewAdminModal open={addNewAdminModalOpen} onOpenChange={setAddNewAdminModalOpen} />
            <EditAdminModal open={editAdminModalOpen} onOpenChange={setEditAdminModalOpen} />
        </div>
    );
}
