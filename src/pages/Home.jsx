import React, { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";

const SAMPLE_DESTINATIONS = [
	{
		id: "bali",
		name: "Bali, Indonesia",
		imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
		rating: 4.8,
		price: "$899",
	},
	{
		id: "santorini",
		name: "Santorini, Greece",
		imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
		rating: 4.9,
		price: "$1099",
	},
	{
		id: "kyoto",
		name: "Kyoto, Japan",
		imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
		rating: 4.7,
		price: "$999",
	},
	{
		id: "paris",
		name: "Paris, France",
		imageUrl: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
		rating: 4.9,
		price: "$1299",
	},
];

export default function Home() {
	const [query, setQuery] = useState("");
	const filtered = SAMPLE_DESTINATIONS.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));

	return (
		<>
			<section className="flex flex-col items-center justify-center text-center pt-10 pb-12 px-5">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl md:text-6xl font-bold text-sky-700 mb-6"
				>
					Explore The World With Wanderly
				</motion.h1>
				<p className="text-gray-600 max-w-2xl mb-8">
					Find breathtaking destinations, unforgettable experiences, and the best travel deals curated just for you.
				</p>
				<div className="w-[92%] md:w-[60%]">
					<SearchBar value={query} onChange={setQuery} onSubmit={() => {}} />
				</div>
			</section>

			<section className="px-5 md:px-10 py-10 bg-sky-50">
				<h2 className="text-3xl font-bold text-sky-700 text-center mb-8">Popular Destinations</h2>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{filtered.map((d) => (
						<DestinationCard key={d.id} destination={d} />
					))}
					{filtered.length === 0 && <p className="text-center col-span-full text-gray-600">No results found.</p>}
				</div>
			</section>
		</>
	);
}


