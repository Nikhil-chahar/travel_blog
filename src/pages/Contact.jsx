import React from "react";

export default function Contact() {
	return (
		<div className="px-5 md:px-10 py-10">
			<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
				<h1 className="text-3xl font-bold text-sky-700">Contact us</h1>
				<p className="mt-2 text-gray-600">We’d love to hear from you. Send a message and we’ll respond soon.</p>
				<form className="mt-6 grid gap-4">
					<input className="border border-gray-200 rounded-lg px-4 py-3" placeholder="Your name" />
					<input className="border border-gray-200 rounded-lg px-4 py-3" type="email" placeholder="Email address" />
					<textarea className="border border-gray-200 rounded-lg px-4 py-3 h-32" placeholder="How can we help?" />
					<button type="button" className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 w-max">
						Send message
					</button>
				</form>
			</div>
		</div>
	);
}


