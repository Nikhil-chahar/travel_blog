import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";

const DATA = [
	{ id: "bali", name: "Bali, Indonesia", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", rating: 4.8, price: "$899", description: "Tropical paradise known for beaches, coral reefs, and forested volcanic mountains." },
	{ id: "santorini", name: "Santorini, Greece", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", rating: 4.9, price: "$1099", description: "Iconic white-washed towns, stunning sunsets, and volcanic-sand beaches in the Aegean Sea." },
	{ id: "kyoto", name: "Kyoto, Japan", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", rating: 4.7, price: "$999", description: "Historic temples, tranquil gardens, and traditional wooden houses in Japan’s cultural heart." },
	{ id: "paris", name: "Paris, France", imageUrl: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba", rating: 4.9, price: "$1299", description: "World-class art, fashion, gastronomy, and culture along the Seine." },
];

export default function DestinationDetails() {
	const { id } = useParams();
	const destination = useMemo(() => DATA.find((d) => d.id === id), [id]);

	if (!destination) {
		return (
			<div className="px-5 md:px-10 py-10 max-w-5xl mx-auto">
				<p className="text-gray-700">Destination not found.</p>
				<Link to="/destinations" className="inline-flex items-center gap-2 text-sky-700 mt-4">
					<ArrowLeft className="w-4 h-4" /> Back to Destinations
				</Link>
			</div>
		);
	}

	return (
		<div className="px-5 md:px-10 py-10">
			<div className="max-w-5xl mx-auto">
				<Link to="/destinations" className="inline-flex items-center gap-2 text-sky-700 mb-4">
					<ArrowLeft className="w-4 h-4" /> Back to Destinations
				</Link>
				<div className="bg-white rounded-2xl shadow overflow-hidden">
					<img src={destination.imageUrl} alt={destination.name} className="w-full h-72 object-cover" />
					<div className="p-6">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h1 className="text-2xl md:text-3xl font-bold">{destination.name}</h1>
								<div className="flex items-center gap-2 text-yellow-500 mt-2">
									<Star className="w-5 h-5" />
									<span className="text-gray-700">{destination.rating}</span>
								</div>
							</div>
							<div className="text-right">
								<p className="text-sm text-gray-500">Starting from</p>
								<p className="text-2xl font-bold text-sky-700">{destination.price}</p>
							</div>
						</div>
						<p className="text-gray-700 mt-4">{destination.description}</p>
						<button className="mt-6 bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700">
							Book now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}


