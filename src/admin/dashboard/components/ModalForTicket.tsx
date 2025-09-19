import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { IconWrapper, UploadImageIcon } from "@/assets/icons";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { inputStyle, switchStyle } from "@/components/common/commonStyles";
import { Textarea } from "@/components/ui/textarea";
import { twMerge } from "tailwind-merge";
import { CloseModalButton } from "@/components/base/Button";

interface ModalForTicketProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	ticket?: {
		userName?: string;
		submitted?: string;
		subject?: string;
		message?: string;
		image?: string;
	};
}

export default function ModalForTicket({ open, onOpenChange, ticket }: ModalForTicketProps) {
	const [respondOpen, setRespondOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent showCloseButton={false} className="p-0 overflow-hidden w-full pb-4">
				<DialogHeader className="bg-stone-200 dark:bg-neutral-700 p-3 py-3.5">
					<div className="flex items-center justify-between">
						<DialogTitle className="text-[1.05rem] font-medium">Recent Ticket</DialogTitle>
						<DialogClose asChild>
							<CloseModalButton onClose={() => onOpenChange(false)} />
						</DialogClose>
					</div>
				</DialogHeader>
				<div className="flex flex-col gap-y-4 px-5">
					<div>
						<div className="text-sm text-muted-foreground">User</div>
						<div className="flex items-center gap-3 mt-2">
							<Avatar className="w-8 h-8">
								<AvatarImage src={ticket?.image} />
								<AvatarFallback className="text-sm">EM</AvatarFallback>
							</Avatar>
							<div className="font-medium">{ticket?.userName ?? "Eddie Mark"}</div>
						</div>
					</div>

					<div>
						<div className="text-sm text-muted-foreground">Submitted</div>
						<div className="font-medium">{ticket?.submitted ?? "Nov 14, 2021 08:00"}</div>
					</div>

					<div>
						<div className="text-sm text-muted-foreground">Subject</div>
						<div className="font-semibold">{ticket?.subject ?? "Password reset not working"}</div>
					</div>

					<div>
						<div className="text-sm text-muted-foreground">Ticket issue</div>
						<div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
							{ticket?.message ??
								"Hi, I can't seem to update the app. It says 'Error checking updates' when I tried to update the app via Google Play. Pls help."}
						</div>
					</div>

					<div>
						<div className="w-20 h-20 bg-gray-100 dark:bg-neutral-800 rounded-md flex items-center justify-center">
							<svg
								width="36"
								height="36"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round">
								<rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
								<path d="M8 14s1.5-2 4-2 4 2 4 2" />
								<path d="M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
							</svg>
						</div>
					</div>

					<div className="pt-4">
						<Button
							className={"w-full active-scale bg-(--primary-clr) text-black h-11 hover:bg-(--primary-clr)"}
							onClick={() => {
								setRespondOpen(true);
								onOpenChange(false);
							}}>
							Respond
						</Button>
					</div>
				</div>
			</DialogContent>
			<AddResponseModal open={respondOpen} onOpenChange={setRespondOpen} initialText={ticket?.message ?? ""} />
		</Dialog>
	);
}

function AddResponseModal({ open, onOpenChange, initialText }: { open: boolean; onOpenChange: (open: boolean) => void; initialText?: string }) {
	const [addImage, setAddImage] = useState(false);
	const [responseText, setResponseText] = useState(initialText ?? "");

	useEffect(() => {
		if (open) {
			setResponseText(initialText ?? "");
			setAddImage(false);
		}
	}, [open, initialText]);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent showCloseButton={false} className="p-0 border-transparent overflow-hidden w-full pb-4">
				<DialogHeader className="bg-stone-200 dark:bg-neutral-700 p-3 py-3.5">
					<div className="flex items-center justify-between">
						<DialogTitle className="text-[1.05rem] font-medium">Add Response</DialogTitle>
						<DialogClose asChild>
							<button className="p-1 aspect-square rounded-full bg-gray-100 dark:bg-neutral-800">
								<IconWrapper className="text-sm">
									<X size={16} />
								</IconWrapper>
							</button>
						</DialogClose>
					</div>
				</DialogHeader>
				<div className="flex flex-col gap-y-4 px-5">
					<div>
						<label className="text-sm font-medium">Response</label>
						<Textarea
							value={responseText}
							placeholder="Enter response..."
							onChange={(e) => setResponseText(e.target.value)}
							className={`${twMerge(inputStyle, "w-full h-28 mt-2")} text-sm rounded-md border p-3 resize-none `}
						/>
					</div>

					<div className="flex items-center justify-between">
						<label className="text-sm font-medium">Upload image</label>
						<div className="flex items-center gap-2">
							<span className="text-xs text-muted-foreground">(optional)</span>
							<Switch checked={addImage} className={`${switchStyle}`} onCheckedChange={(v) => setAddImage(Boolean(v))} />
						</div>
					</div>

					{addImage && (
						<div className="border-2 border-dashed border-yellow-300 rounded-md p-6 text-center">
							<label className="flex flex-col items-center gap-2 cursor-pointer">
								<IconWrapper>
									<UploadImageIcon />
								</IconWrapper>
								<div className="text-sm text-muted-foreground">Click to upload or drag and drop</div>
								<div className="text-xs text-muted-foreground">PDF, JPG, PNG (max 2mb)</div>
								<input type="file" accept="image/*,application/pdf" className="hidden" />
							</label>
						</div>
					)}

					<div className="mt-4">
						<Button className="w-full bg-(--primary-clr) h-10 text-black hover:bg-(--primary-clr)" onClick={() => onOpenChange(false)}>
							Send
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
