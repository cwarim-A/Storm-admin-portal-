import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
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
        <DialogContent className=" w-full max-w-[950px] h-auto p-0 " showCloseButton={false} >
            <DialogHeader className="flex flex-row justify-between items-center mb-4 px-5 rounded-t-lg py-4 bg-[#E3E3E3]">
                <DialogTitle className="text-lg font-bold ">
                    Add new Admin
                </DialogTitle>
                <DialogClose asChild>
                    <button className="rounded-full bg-[#BCBCBC] p-2">
                        <Cross2Icon />
                    </button>
                </DialogClose>
            </DialogHeader>


            {/* Form */}
            <form className="flex flex-col gap-4 px-5">
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
                    <div className="flex flex-wrap gap-2 border rounded-lg w-full h-[100px] p-3 mt-2">
                        {["View Admin users", "Manage complaints", "View users","View Dashboard", "View Permission"].map(
                            (perm) => (
                                <span
                                    key={perm}
                                    className="px-3 py-2 bg-[#fff] border border-[#E3E3E3] rounded-2xl text-sm flex items-center gap-2  w-fit h-fit"
                                >
                                    {perm} <button className="text-xs">✕</button>
                                </span>
                            )
                        )}
                    </div>
                </div>

                <Button className="w-full bg-yellow-400 mt-4 mb-4 rounded-full text-black">
                    Add Admin
                </Button>
            </form>

        </DialogContent>
    </Dialog>
);


export const EditAdminModal = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className=" w-full max-w-[950px] h-auto p-0 " showCloseButton={false} >
            <DialogHeader className="flex flex-row justify-between items-center mb-4 px-5 rounded-t-lg py-4 bg-[#E3E3E3]">
                <DialogTitle className="text-lg font-bold ">
                    Edit
                </DialogTitle>
                <DialogClose asChild>
                    <button className="rounded-full bg-[#BCBCBC] p-2">
                        <Cross2Icon />
                    </button>
                </DialogClose>
            </DialogHeader>


            {/* Form */}
            <form className="flex flex-col gap-4 px-5">
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
                    <div className="flex flex-wrap gap-2 border rounded-lg w-full h-[100px] p-3 mt-2">
                        {["View Admin users", "Manage complaints", "View users", "View Dashboard", "View Permission"].map(
                            (perm) => (
                                <span
                                    key={perm}
                                    className="px-3 py-2 bg-[#fff] border border-[#E3E3E3] rounded-2xl text-sm flex items-center gap-2  w-fit h-fit"
                                >
                                    {perm} <button className="text-xs">✕</button>
                                </span>
                            )
                        )}
                    </div>
                </div>

                <Button className="w-full bg-yellow-400 mt-4 mb-4 rounded-full text-black">
                    Update
                </Button>
            </form>

        </DialogContent>
    </Dialog>
); 