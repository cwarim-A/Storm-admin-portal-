import { Input } from "@/components/ui/input";
import { checkboxStyle, inputStyle } from "@/components/common/commonStyles";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/assets/icons";
import { Link } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { _router } from "@/routes/_router";
import { EyeIcon } from "lucide-react";
import AuthSkin from "@/components/common/AuthSkin";

export default function AdminLogin() {
	return (
		<AuthSkin title="Login to your account" subtitle="Sign in to access your dashboard and manage the platform.">
			<form action="" className="flex flex-col gap-y-6">
				<Input className={`${twMerge(inputStyle, "h-12")} w-full`} type="email" placeholder="Your email address" />
				<div>
					<div className="relative">
						<Input className={`${twMerge(inputStyle, "h-12")} w-full`} type="password" placeholder="Your password" />
						<button
							className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent shadow-none hover:bg-gray-100 flex items-center justify-center p-2 rounded-full"
							type="button">
							<IconWrapper className="text-xl">
								<EyeIcon />
							</IconWrapper>
						</button>
					</div>
					<div className="flex items-center justify-between gap-5 mt-4">
						<div className="flex items-center gap-2">
							<Checkbox className={`${checkboxStyle} [&_*_svg]:text-black`} id="remember" />
							<Label htmlFor="remember" className="font-normal cursor-pointer">
								Remember me
							</Label>
						</div>
						<Link to={_router.admin.auth.forgotpassword} className="underline text-sm">
							Forgot password
						</Link>
					</div>
				</div>

				<div className="mt-10">
					<Button className="bg-(--primary-clr) rounded-sm active-scale hover:bg-(--primary-clr)/90 text-black h-12 w-full" type="button">
						Login
					</Button>
				</div>
			</form>
		</AuthSkin>
	);
}
