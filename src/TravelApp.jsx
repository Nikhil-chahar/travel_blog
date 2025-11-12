import React from "react";
import { motion } from "framer-motion";
import { Plane, MapPin, Search, Globe, Star } from "lucide-react";

export default function TravelApp() {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.8,
      price: "$899",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      rating: 4.9,
      price: "$1099",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      rating: 4.7,
      price: "$999",
    },
    {
      id: 4,
      name: "Paris, France",
      img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      rating: 4.9,
      price: "$1299",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-20">
        <div className="flex items-center gap-2 text-sky-600 font-bold text-2xl">
          <Plane className="w-6 h-6" />
          <span>Wanderly</span>
        </div>
        <div className="flex gap-6 text-gray-600 font-medium">
          <a href="#home" className="hover:text-sky-600">Home</a>
          <a href="#destinations" className="hover:text-sky-600">Destinations</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </div>
        <button className="bg-sky-600 text-white px-5 py-2 rounded-full shadow hover:bg-sky-700">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-sky-700 mb-6"
        >
          Explore The World With Wanderly
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mb-8">
          Find breathtaking destinations, unforgettable experiences, and the best travel deals curated just for you.
        </p>

        <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-5 py-3 w-[90%] md:w-[50%]">
          <MapPin className="text-sky-600" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 outline-none text-gray-600"
          />
          <button className="bg-sky-600 text-white rounded-full px-5 py-2 flex items-center gap-2 hover:bg-sky-700">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="px-10 py-20 bg-sky-50">
        <h2 className="text-3xl font-bold text-sky-700 text-center mb-10">
          Popular Destinations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((d) => (
            <motion.div
              key={d.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" /> {d.rating}
                  </div>
                  <span className="font-bold text-sky-700">{d.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-700 text-white py-10 text-center">
        <Globe className="mx-auto mb-3 w-8 h-8" />
        <p>© 2025 Wanderly. All rights reserved.</p>
      </footer>
    </div>
  );
}
