import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IconWrapper } from "@/assets/icons";
import Vector from "@/assets/images/logos/delete.svg";

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

export const DeleteAdminModal = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="text-center" showCloseButton={false} >
            <DialogHeader>
                <IconWrapper className="mx-auto">
                    <img src={Vector} alt="Icon" />
                </IconWrapper>
                <DialogTitle className="text-center">Delete Admin?</DialogTitle>
                <p className="text-center">Are you sure you want to delete this Admin?<br /> This action is irreversible and cannot be undone.</p>
            </DialogHeader>
            <DialogFooter className="flex !flex-col w-full justify-center gap-4">
                <Button variant="default" className=" bg-red-600 text-black !rounded-full !py-5" onClick={() => onOpenChange(false)}>
                    Cancel
                </Button>
                <Button variant="outline" className="text-red-500 !rounded-full !py-5 border-red-500">
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);

// export const ManagePermissionsModal = ({
//     open,
//     onOpenChange,
// }: {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
// }) => (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent className=" w-full max-w-[950px] h-auto p-0 " showCloseButton={false} >
//             <DialogHeader className="flex flex-row justify-between items-center mb-4 px-5 rounded-t-lg py-4 bg-[#E3E3E3]">
//                 <DialogTitle className="text-lg font-bold ">
//                     Add new Admin
//                 </DialogTitle>
//                 <DialogClose asChild>
//                     <button className="rounded-full bg-[#BCBCBC] p-2">
//                         <Cross2Icon />
//                     </button>
//                 </DialogClose>
//             </DialogHeader>


          

//         </DialogContent>
//     </Dialog>
// );

export const ManagePermissionsModal = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => {
    const permissions = [
        "Manage complaints",
        "View Admin users",
        "View users",
        "Edit roles",
        "View Dashboards",
        "Add Admin",
        "View Moderators",
        "Delete Admin",
        "Add Moderator",
        "Manage Permission",
        "Remove Moderator",
        "Add User",
        "View Subscribers",
        "Remove User",
        "Add new subscription",
        "Create Debate",
        "Add new Profit sharing",
        "End debate",
        "Update Profit Sharing",
        "Approve Payout",
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="w-full max-w-[950px] h-auto p-0 rounded-lg"
                showCloseButton={false}
            >
                {/* Header */}
                <DialogHeader className="flex flex-row justify-between items-center px-5 py-4 bg-[#E3E3E3] rounded-t-lg">
                    <DialogTitle className="text-lg font-bold">Manage Permissions</DialogTitle>
                    <DialogClose asChild>
                        <button className="rounded-full bg-[#BCBCBC] p-2">
                            <Cross2Icon />
                        </button>
                    </DialogClose>
                </DialogHeader>

                {/* Body */}
                <div className="px-6 py-4">
                    <label className="flex items-center space-x-2  pb-5">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-black">All</span>
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-5 gap-x-6">
                        {permissions.map((perm, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="text-sm text-black">{perm}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 flex justify-center">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full">
                        Save Permission
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
