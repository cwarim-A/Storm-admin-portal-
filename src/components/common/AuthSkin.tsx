import Image from "@/components/base/Image";
import { media } from "@/resources/images";
import type React from "react";

type Props = {
	children: React.ReactNode;
	title?: string;
	subtitle?: string;
};
export default function AuthSkin({ children, title, subtitle }: Props) {
	return (
		<div className="bg-white w-full">
			<Image src={media.logos.darkLogo} className="w-28 md:w-32 mx-auto" />

			<section className="mt-16 flex flex-col gap-y-16">
				<header className="text-center flex flex-col items-center gap-y-2">
					<h3 className="text-3xl sm:text-4xl font-semibold">{title}</h3>
					<p className="max-w-md text-sm sm:text-base block">{subtitle}</p>
				</header>

				<div>{children}</div>
			</section>
		</div>
	);
}
