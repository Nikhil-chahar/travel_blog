import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Plane } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="fixed top-0 inset-x-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
			<div className="max-w-6xl mx-auto px-5">
				<div className="h-16 flex items-center justify-between">
					<Link to="/" className="flex items-center gap-2 text-sky-600 font-bold text-2xl">
						<Plane className="w-6 h-6" />
						<span>Wanderly</span>
					</Link>
					<div className="flex items-center gap-6 text-gray-700 font-medium">
						<NavLink to="/" end className={({ isActive }) => (isActive ? "text-sky-700" : "hover:text-sky-700")}>
							Home
						</NavLink>
						<NavLink to="/destinations" className={({ isActive }) => (isActive ? "text-sky-700" : "hover:text-sky-700")}>
							Destinations
						</NavLink>
						<NavLink to="/about" className={({ isActive }) => (isActive ? "text-sky-700" : "hover:text-sky-700")}>
							About
						</NavLink>
						<NavLink to="/contact" className={({ isActive }) => (isActive ? "text-sky-700" : "hover:text-sky-700")}>
							Contact
						</NavLink>
					</div>
					<button className="bg-sky-600 text-white px-4 py-2 rounded-full shadow hover:bg-sky-700">
						Sign In
					</button>
				</div>
			</div>
		</nav>
	);
}


