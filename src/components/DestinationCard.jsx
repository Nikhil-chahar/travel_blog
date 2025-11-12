import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function DestinationCard({ destination }) {
	const { id, name, imageUrl, rating, price } = destination;
	return (
		<div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
			<Link to={`/destinations/${id}`}>
				<img src={imageUrl} alt={name} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
			</Link>
			<div className="p-4">
				<h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
				<div className="flex justify-between items-center mt-2">
					<div className="flex items-center gap-1 text-yellow-500">
						<Star className="w-4 h-4" />
						<span>{rating}</span>
					</div>
					<span className="font-bold text-sky-700">{price}</span>
				</div>
				<Link to={`/destinations/${id}`} className="inline-block mt-3 text-sky-700 hover:text-sky-800 font-medium">
					View details →
				</Link>
			</div>
		</div>
	);
}


