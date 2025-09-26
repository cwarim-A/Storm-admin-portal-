import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

export const AddNewAdminModal = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[950px] " showCloseButton={false} >
            {/* <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="text-lg font-bold text-left">Add new Admin</DialogTitle>
            </DialogHeader> */}
            <DialogHeader className="flex flex-row justify-between items-center mb-4 p-0 bg-[#E3E3E3]">
                <DialogTitle className="text-lg font-bold ">
                    Add new Admin
                </DialogTitle>
                <DialogClose asChild>
                    <button className="rounded-full hover:bg-gray-200 p-1">
                        <Cross2Icon />
                    </button>
                </DialogClose>
            </DialogHeader>


            {/* Form */}
            <form className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        defaultValue="Eddie Nwaneri"
                        className="w-full border rounded-2xl px-3 py-2 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        defaultValue="eddienwaneri@gmail.com"
                        className="w-full border rounded-2xl px-3 py-2 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Privilege</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>Customer Support</option>
                        <option>Admin</option>
                        <option>Super Admin</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Permissions</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {["View Admin users", "Manage complaints", "View users"].map(
                            (perm) => (
                                <span
                                    key={perm}
                                    className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1"
                                >
                                    {perm} <button className="text-xs">✕</button>
                                </span>
                            )
                        )}
                    </div>
                </div>

                <Button className="w-full bg-yellow-400 mt-4 rounded-full">
                    Save Changes
                </Button>
            </form>

        </DialogContent>
    </Dialog>
);
