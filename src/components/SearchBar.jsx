import React from "react";
import { MapPin, Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search destinations...", value, onChange, onSubmit }) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit?.();
			}}
			className="flex items-center gap-3 bg-white rounded-full shadow-md px-5 py-3 w-full"
		>
			<MapPin className="text-sky-600" />
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				className="flex-1 outline-none text-gray-700 placeholder:text-gray-400"
			/>
			<button type="submit" className="bg-sky-600 text-white rounded-full px-5 py-2 flex items-center gap-2 hover:bg-sky-700">
				<Search className="w-4 h-4" />
				Search
			</button>
		</form>
	);
}


