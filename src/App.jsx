import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white text-gray-800">
				<Navbar />
				<main className="flex-1 pt-24">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/destinations" element={<Destinations />} />
						<Route path="/destinations/:id" element={<DestinationDetails />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}


