import React, { useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";

const ALL_DESTINATIONS = [
	{ id: "bali", name: "Bali, Indonesia", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", rating: 4.8, price: "$899", region: "Asia" },
	{ id: "santorini", name: "Santorini, Greece", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", rating: 4.9, price: "$1099", region: "Europe" },
	{ id: "kyoto", name: "Kyoto, Japan", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", rating: 4.7, price: "$999", region: "Asia" },
	{ id: "paris", name: "Paris, France", imageUrl: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba", rating: 4.9, price: "$1299", region: "Europe" },
	{ id: "maui", name: "Maui, USA", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60", rating: 4.6, price: "$1249", region: "North America" },
	{ id: "marrakech", name: "Marrakech, Morocco", imageUrl: "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1200&q=60", rating: 4.5, price: "$949", region: "Africa" },
];

export default function Destinations() {
	const [query, setQuery] = useState("");
	const [region, setRegion] = useState("All");

	const regions = useMemo(() => ["All", ...Array.from(new Set(ALL_DESTINATIONS.map((d) => d.region)))], []);
	const filtered = useMemo(() => {
		const q = query.toLowerCase();
		return ALL_DESTINATIONS.filter((d) => (region === "All" ? true : d.region === region) && d.name.toLowerCase().includes(q));
	}, [query, region]);

	return (
		<div className="px-5 md:px-10">
			<div className="max-w-6xl mx-auto py-6">
				<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
					<div className="flex-1">
						<SearchBar value={query} onChange={setQuery} placeholder="Search all destinations..." />
					</div>
					<select
						className="bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-700"
						value={region}
						onChange={(e) => setRegion(e.target.value)}
					>
						{regions.map((r) => (
							<option key={r} value={r}>
								{r}
							</option>
						))}
					</select>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{filtered.map((d) => (
						<DestinationCard key={d.id} destination={d} />
					))}
				</div>
				{filtered.length === 0 && <p className="text-center text-gray-600 mt-10">No destinations match your filters.</p>}
			</div>
		</div>
	);
}


