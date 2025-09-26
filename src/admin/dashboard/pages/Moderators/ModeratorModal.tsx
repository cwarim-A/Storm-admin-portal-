import { IconWrapper } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import Vector from "@/assets/images/logos/Vector.svg";





export const SuspendModeratorModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="text-center">
            <DialogHeader>
                <IconWrapper className="mx-auto">
                    <img src={Vector} alt="Icon" />
                </IconWrapper>
                <DialogTitle>Suspend Moderator?</DialogTitle>
                <p>Are you sure you want to remove the Moderator role from this user?</p>
            </DialogHeader>
            <DialogFooter className="flex justify-center gap-4">
                <Button variant="default" onClick={() => onOpenChange(false)}>
                    Cancel
                </Button>
                <Button variant="outline" className="text-yellow-500 border-yellow-500">
                    Suspend
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);


export const WarnModeratorModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="text-center">
            <DialogHeader>
                <IconWrapper className="mx-auto">
                    <img src={Vector} alt="Icon" />
                </IconWrapper>
                <DialogTitle>Warn Moderator?</DialogTitle>
                <p>Are you sure you want to warn a Moderator?</p>
            </DialogHeader>
            <DialogFooter className="flex justify-center gap-4">
                <Button variant="default" onClick={() => onOpenChange(false)}>
                    Cancel
                </Button>
                <Button variant="outline" className="text-yellow-500 border-yellow-500">
                    Send Warning
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);

export const BanModeratorModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="text-center">
            <DialogHeader>
                <IconWrapper className="mx-auto">
                    <img src={Vector} alt="Icon" />
                </IconWrapper>
                <DialogTitle>Ban Moderator?</DialogTitle>
                <p>Are you sure you want to ban this Moderator? This action is irreversible and cannot be undone.</p>
            </DialogHeader>
            <DialogFooter className="flex justify-center gap-4">
                <Button variant="default" onClick={() => onOpenChange(false)}>
                    Cancel
                </Button>
                <Button variant="outline" className="text-yellow-500 border-yellow-500">
                    Ban
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);


