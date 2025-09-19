import { ArrowLeftIcon, ChevronLeftIcon, IconWrapper } from "@/assets/icons";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

export default function BackButton({ arrow = true, title }: { arrow?: boolean; title?: string }) {
	const navigate = useNavigate();
	return (
		<div className="flex items-center gap-3">
			<button
				type="button"
				className={
					"border p-2 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 text-xl bg-gray-100 rounded-md hover:bg-gray-200 transition"
				}
				onClick={() => navigate(-1)}>
				<IconWrapper>{arrow ? <ArrowLeftIcon /> : <ChevronLeftIcon />}</IconWrapper>
			</button>
			{title && <h4 className="font-medium">{title}</h4>}
		</div>
	);
}

export const CloseModalButton = ({ onClose }: { onClose?: () => void }) => (
	<button type="button" className="p-1 aspect-square rounded-full bg-gray-100 dark:bg-neutral-800" onClick={onClose}>
		<IconWrapper className="text-sm">
			<X size={16} />
		</IconWrapper>
	</button>
);
