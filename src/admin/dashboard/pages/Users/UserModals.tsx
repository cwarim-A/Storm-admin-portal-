import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/assets/icons";
import { UserIcon } from "lucide-react";

export const SuspendUserModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
	<Dialog open={open} onOpenChange={onOpenChange}>
		<DialogContent className="text-center">
			<DialogHeader>
				<IconWrapper className="mx-auto">
					<UserIcon size={32} />
				</IconWrapper>
				<DialogTitle>Suspend User?</DialogTitle>
				<p>Are you sure you want to suspend this user?</p>
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

export const WarnUserModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
	<Dialog open={open} onOpenChange={onOpenChange}>
		<DialogContent className="text-center">
			<DialogHeader>
				<IconWrapper className="mx-auto">
					<UserIcon size={32} />
				</IconWrapper>
				<DialogTitle>Warn User?</DialogTitle>
				<p>Are you sure you want to warn this user?</p>
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

export const BanUserModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
	<Dialog open={open} onOpenChange={onOpenChange}>
		<DialogContent className="text-center">
			<DialogHeader>
				<IconWrapper className="mx-auto">
					<UserIcon size={32} />
				</IconWrapper>
				<DialogTitle>Ban User?</DialogTitle>
				<p>Are you sure you want to ban this user?</p>
				<p className="text-red-500">This action is irreversible and cannot be undone.</p>
			</DialogHeader>
			<DialogFooter className="flex justify-center gap-4">
				<Button variant="default" className="bg-red-500 text-white" onClick={() => onOpenChange(false)}>
					Cancel
				</Button>
				<Button variant="outline" className="text-red-500 border-red-500">
					Ban
				</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
);
