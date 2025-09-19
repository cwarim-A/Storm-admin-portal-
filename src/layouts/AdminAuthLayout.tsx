import { Outlet } from "react-router";

export default function AdminAuthLayout() {
	return (
		<div className="min-h-screen flex">
			<main className="max-w-lg flex-grow flex items-center justify-center mx-auto px-4">
				<Outlet />
			</main>
		</div>
	);
}
