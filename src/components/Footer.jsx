import React from "react";
import { Globe } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-sky-700 text-white py-10 mt-12">
			<div className="max-w-6xl mx-auto px-5 text-center">
				<Globe className="mx-auto mb-3 w-8 h-8" />
				<p className="opacity-90">© {new Date().getFullYear()} Wanderly. All rights reserved.</p>
			</div>
		</footer>
	);
}


