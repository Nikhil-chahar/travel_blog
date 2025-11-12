import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="px-5 md:px-10 py-16 text-center">
			<h1 className="text-6xl font-bold text-sky-700">404</h1>
			<p className="mt-2 text-gray-700">The page you’re looking for doesn’t exist.</p>
			<Link to="/" className="inline-block mt-6 text-sky-700 font-medium">
				Go back home →
			</Link>
		</div>
	);
}


