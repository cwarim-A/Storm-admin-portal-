import CustomCard from "@/components/base/CustomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import { inputStyle } from "@/components/common/commonStyles";
import type { FieldBoxType } from "./types";
import FieldBox from "@/components/base/FieldBox";
import { UserIcon, CardIcon, MoneyIcon, UploadImageIcon } from "@/assets/icons";

export default function UserDetailsProfileTabContent({
	user,
	editing,
	sectionForms,
	startSectionEdit,
	cancelSectionEdit,
	saveSection,
	updateSectionField,
}: FieldBoxType) {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-7 gap-4">
			<CustomCard className="xl:col-span-4">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-md font-medium">Personal information</h3>
					<div>
						{Boolean(editing["personal"]) ? (
							<>
								<Button variant="ghost" onClick={() => cancelSectionEdit("personal")}>
									Cancel
								</Button>
								<Button onClick={() => saveSection("personal")}>Save</Button>
							</>
						) : (
							<Button onClick={() => startSectionEdit("personal")}>Edit</Button>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FieldBox label="First name" icon={<UserIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.firstName as string) ?? user.firstName}
								onChange={(e) => updateSectionField("personal", "firstName", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.firstName}</div>
						)}
					</FieldBox>

					<FieldBox label="Last name" icon={<UserIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.lastName as string) ?? user.lastName}
								onChange={(e) => updateSectionField("personal", "lastName", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.lastName}</div>
						)}
					</FieldBox>

					<FieldBox label="Other names" icon={<UserIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.otherNames as string) ?? user.otherNames}
								onChange={(e) => updateSectionField("personal", "otherNames", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.otherNames}</div>
						)}
					</FieldBox>

					<FieldBox label="Email" icon={<UploadImageIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.email as string) ?? user.email}
								onChange={(e) => updateSectionField("personal", "email", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.email}</div>
						)}
					</FieldBox>

					<FieldBox label="Phone" icon={<UserIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.phone as string) ?? user.phone}
								onChange={(e) => updateSectionField("personal", "phone", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.phone}</div>
						)}
					</FieldBox>

					<FieldBox label="Gender" icon={<UserIcon />}>
						{Boolean(editing["personal"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.gender as string) ?? user.gender}
								onChange={(e) => updateSectionField("personal", "gender", e.target.value)}
							/>
						) : (
							<div className="font-medium capitalize">{user.gender}</div>
						)}
					</FieldBox>

					<FieldBox label="Date of birth" icon={<UserIcon />}>
						{editing["personal"] ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["personal"]?.dob as string) ?? user.dob}
								onChange={(e) => updateSectionField("personal", "dob", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.dob}</div>
						)}
					</FieldBox>
				</div>
			</CustomCard>

			<CustomCard className="xl:col-span-3">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-md font-medium">Occupation information</h3>
					<div>
						{Boolean(editing["occupation"]) ? (
							<>
								<Button variant="ghost" onClick={() => cancelSectionEdit("occupation")}>
									Cancel
								</Button>
								<Button onClick={() => saveSection("occupation")}>Save</Button>
							</>
						) : (
							<Button onClick={() => startSectionEdit("occupation")}>Edit</Button>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4">
					<FieldBox label="Occupation" icon={<CardIcon />}>
						{Boolean(editing["occupation"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["occupation"]?.occupation as string) ?? user.occupation}
								onChange={(e) => updateSectionField("occupation", "occupation", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.occupation}</div>
						)}
					</FieldBox>

					<FieldBox label="Industry" icon={<CardIcon />}>
						{Boolean(editing["occupation"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["occupation"]?.occupationIndustry as string) ?? user.occupationIndustry}
								onChange={(e) => updateSectionField("occupation", "occupationIndustry", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.occupationIndustry}</div>
						)}
					</FieldBox>

					<FieldBox label="Estimated monthly send" icon={<MoneyIcon />}>
						{editing["occupation"] ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["occupation"]?.estimatedMonthlySend as string) ?? user.estimatedMonthlySend}
								onChange={(e) => updateSectionField("occupation", "estimatedMonthlySend", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.estimatedMonthlySend}</div>
						)}
					</FieldBox>
				</div>
			</CustomCard>

			<CustomCard className="xl:col-span-4">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-md font-medium">Address</h3>
					<div>
						{Boolean(editing["address"]) ? (
							<>
								<Button variant="ghost" onClick={() => cancelSectionEdit("address")}>
									Cancel
								</Button>
								<Button onClick={() => saveSection("address")}>Save</Button>
							</>
						) : (
							<Button onClick={() => startSectionEdit("address")}>Edit</Button>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FieldBox label="Unit" icon={<UploadImageIcon />}>
						{Boolean(editing["address"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["address"]?.unitNo as string) ?? user.unitNo}
								onChange={(e) => updateSectionField("address", "unitNo", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.unitNo}</div>
						)}
					</FieldBox>

					<FieldBox label="Street" icon={<UploadImageIcon />}>
						{Boolean(editing["address"]) ? (
							<Input
								className={twMerge(inputStyle, "dark:border-neutral-800 dark:outline-neutral-800")}
								value={(sectionForms["address"]?.streetNo as string) ?? user.streetNo}
								onChange={(e) => updateSectionField("address", "streetNo", e.target.value)}
							/>
						) : (
							<div className="font-medium">{user.streetNo}</div>
						)}
					</FieldBox>
				</div>
			</CustomCard>
		</div>
	);
}
