import React from "react";

export default function About() {
	return (
		<div className="px-5 md:px-10 py-10">
			<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
				<h1 className="text-3xl font-bold text-sky-700">About Wanderly</h1>
				<p className="mt-4 text-gray-700">
					Wanderly is a modern travel discovery experience. Browse curated destinations, compare deals, and get inspired by
					world-class locations around the globe — all with a beautiful, fast, and responsive UI.
				</p>
				<p className="mt-4 text-gray-700">
					This demo showcases a frontend-only React app built with Tailwind CSS, React Router, and Framer Motion. You can extend
					it by connecting real APIs for search, availability, and bookings.
				</p>
			</div>
		</div>
	);
}


