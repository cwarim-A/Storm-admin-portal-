import BackButton from "@/components/base/Button";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserDetailsProfileTabContent from "./UserDetailsProfileTabContent";
import UserDetailsActivityTabContent from "./UserDetailsActivityTabContent";
import UserDetailsNotificationTabContent from "./UserDetailsNotificationTabContent";
import UserDetailsPaymentsTabContent from "./UserDetailsPaymentsTabContent";
import UserDetailsSubscriptionsTabContent from "./UserDetailsSubscriptionsTabContent";
import UserDetailsTicketTabContent from "./UserDetailsTicketTabContent";
import UserDetailsDebateTabContent from "./UserDetailsDebateTabContent";
import CustomCard from "@/components/base/CustomCard";

type User = {
	firstName: string;
	lastName: string;
	otherNames: string;
	email: string;
	phone: string;
	gender: string;
	dob: string;
	occupation: string;
	occupationIndustry: string;
	estimatedMonthlySend: string;
	unitNo: string;
	streetNo: string;
};

const initialUser: User = {
	firstName: "Kidney",
	lastName: "Stone",
	otherNames: "Stone",
	email: "kidney@yopmail.com",
	phone: "+2349865327577",
	gender: "male",
	dob: "09/20/2000",
	occupation: "CEO",
	occupationIndustry: "Media & Entertainment",
	estimatedMonthlySend: "20000.00",
	unitNo: "8",
	streetNo: "Oba street",
};

export default function UserDetails() {
	const [user, setUser] = useState<User>(initialUser);

	// explicit per-section edit state to avoid accidental truthiness issues
	const [editing, setEditing] = useState<Record<string, boolean>>({
		personal: false,
		occupation: false,
		address: false,
	});
	const [sectionForms, setSectionForms] = useState<Record<string, Partial<User>>>({});

	const startSectionEdit = (section: string) => {
		setSectionForms((s) => ({ ...s, [section]: { ...user } }));
		setEditing((e) => ({ ...e, [section]: true }));
	};

	const cancelSectionEdit = (section: string) => {
		setSectionForms((s) => {
			const next = { ...s };
			delete next[section];
			return next;
		});
		setEditing((e) => ({ ...e, [section]: false }));
	};

	const saveSection = (section: string) => {
		const patch = sectionForms[section] ?? {};
		setUser((u) => ({ ...u, ...patch }));
		setSectionForms((s) => {
			const next = { ...s };
			delete next[section];
			return next;
		});
		setEditing((e) => ({ ...e, [section]: false }));
	};

	const updateSectionField = (section: string, field: keyof User, value: string) => {
		setSectionForms((s) => ({ ...s, [section]: { ...(s[section] ?? {}), [field]: value } }));
	};

	// FieldBox lives inside the ProfileTabContent; no local helper needed here

	const userProfile = () => (
		<div className="mt-4">
			<CustomCard className="bg-white dark:bg-neutral-900 rounded-md p-6 shadow-2xs flex flex-col md:flex-row items-center gap-6">
				<div className="flex items-center gap-4">
					<div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-neutral-800 flex items-center justify-center text-xl font-semibold">
						{`${user.firstName?.charAt(0) ?? ""}${user.lastName?.charAt(0) ?? ""}`}
					</div>

					<div>
						<h1 className="text-2xl font-semibold">
							{user.firstName} {user.lastName}
						</h1>
						<div className="text-sm text-muted-foreground">
							{user.occupation} • {user.occupationIndustry}
						</div>
					</div>
				</div>

				<div className="mt-4 md:mt-0 md:ml-auto grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
					<div>
						<div className="text-sm text-muted-foreground">Staff ID</div>
						<div className="font-medium">SJ53862</div>
					</div>

					<div>
						<div className="text-sm text-muted-foreground">Phone</div>
						<div className="font-medium">{user.phone}</div>
					</div>

					<div>
						<div className="text-sm text-muted-foreground">Email</div>
						<div className="font-medium">{user.email}</div>
					</div>
				</div>
			</CustomCard>
		</div>
	);

	return (
		<div>
			<BackButton title="Current User" />

			{/* static profile header */}
			{userProfile()}

			{/* tabs control */}
			<div className="mt-4">
				<Tabs defaultValue="profile">
					<div className="flex items-center justify-between">
						<TabsList className="rounded-md w-full max-w-md md:max-w-full overflow-x-auto h-fit justify-start">
							<TabsTrigger value="profile">Profile</TabsTrigger>
							<TabsTrigger value="activity">Activity</TabsTrigger>
							<TabsTrigger value="notification">Notification</TabsTrigger>
							<TabsTrigger value="payments">Payments</TabsTrigger>
							<TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
							<TabsTrigger value="ticket">Ticket</TabsTrigger>
							<TabsTrigger value="debate">Debate</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="profile" className="mt-5">
						<UserDetailsProfileTabContent
							user={user}
							editing={editing}
							sectionForms={sectionForms}
							startSectionEdit={startSectionEdit}
							cancelSectionEdit={cancelSectionEdit}
							saveSection={saveSection}
							updateSectionField={updateSectionField}
						/>
					</TabsContent>

					<TabsContent value="activity" className="mt-5">
						<UserDetailsActivityTabContent />
					</TabsContent>

					<TabsContent value="notification" className="mt-5">
						<UserDetailsNotificationTabContent />
					</TabsContent>

					<TabsContent value="payments" className="mt-5">
						<UserDetailsPaymentsTabContent />
					</TabsContent>

					<TabsContent value="subscriptions" className="mt-5">
						<UserDetailsSubscriptionsTabContent />
					</TabsContent>

					<TabsContent value="ticket" className="mt-5">
						<UserDetailsTicketTabContent />
					</TabsContent>

					<TabsContent value="debate" className="mt-5">
						<UserDetailsDebateTabContent />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
