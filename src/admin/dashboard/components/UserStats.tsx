import { ActiveUserIcon, BlockedUserIcon, InactiveUserIcon, UsersIcon } from "@/assets/icons";
import StatCard from "@/components/base/StatCard";

export const UserStats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
			<StatCard title="Total Users" value={1000} change="+10%" trend="up" icon={<UsersIcon />} />
			<StatCard title="Monthly Active Users" value={500} change="-5%" trend="up" icon={<ActiveUserIcon />} />
			<StatCard title="Daily active Users" value={300} change="+20%" trend="down" icon={<ActiveUserIcon />} />
			<StatCard title="Inactive Users" value={300} icon={<InactiveUserIcon />} />
		</div>
	);
};
