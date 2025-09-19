import { useEffect, useState } from "react";
import CustomCard from "@/components/base/CustomCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router";
import BackButton from "@/components/base/Button";

export default function DebateAddEdit() {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");
	const navigate = useNavigate();

	const isEdit = !!id;

	// form state
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");

	useEffect(() => {
		if (isEdit) {
			// load existing debate by id - replace with real API call
			// placeholder data
			setTitle("Loaded debate title");
			setCategory("Politics");
		}
	}, [isEdit, id]);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (isEdit) {
			// call update API
			console.log("updating", { id, title, category });
		} else {
			// call create API
			console.log("creating", { title, category });
		}
		// navigate back to debate list
		navigate("/admin/dashboard/debate");
	}

	return (
		<div className="max-w-5xl mx-auto mt-3">
			<div className="flex items-center justify-between mb-4">
				<BackButton title={isEdit ? "Edit Debate" : "Add Debate"} />
			</div>

			<CustomCard>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm mb-1">Title</label>
						<Input value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div>
						<label className="block text-sm mb-1">Category</label>
						<Input value={category} onChange={(e) => setCategory(e.target.value)} />
					</div>

					<div className="flex items-center justify-end gap-2">
						<Button variant="ghost" onClick={() => navigate(-1)} type="button">
							Cancel
						</Button>
						<Button type="submit">{isEdit ? "Update" : "Create"}</Button>
					</div>
				</form>
			</CustomCard>
		</div>
	);
}
