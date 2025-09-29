import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";



export const EditProfitSharingModal = ({
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
                    Update Proit Sharing
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
                    <label className="text-sm font-medium">Select Tier</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>Paid Debate</option>
                        <option>Free Debate</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Platform Share</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>80%</option>
                        <option>20%</option>
                        <option>Custom</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Creator Share</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>80%</option>
                        <option>20%</option>
                        <option>Custom</option>
                    </select>
                </div>

                

                <Button className="w-full bg-yellow-400 mt-4 mb-4 rounded-full text-black">
                    Update
                </Button>
            </form>

        </DialogContent>
    </Dialog>
); 


export const AddNewProfitSharingModal = ({
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
                    Add New Profit Sharing
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
                    <label className="text-sm font-medium">Select Tier</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>Paid Debate</option>
                        <option>Free Debate</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Platform Share</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>80%</option>
                        <option>20%</option>
                        <option>Custom</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Creator Share</label>
                    <select className="w-full border rounded-2xl px-3 py-2 mt-1">
                        <option>80%</option>
                        <option>20%</option>
                        <option>Custom</option>
                    </select>
                </div>



                <Button className="w-full bg-yellow-400 mt-4 mb-4 rounded-full text-black">
                    Add New
                </Button>
            </form>

        </DialogContent>
    </Dialog>
);