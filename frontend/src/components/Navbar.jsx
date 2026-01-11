import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Tourist Destinations</h1>
                <ul className="flex gap-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/add" className="hover:underline">Add Destination</a></li>
                </ul>
            </div>
        </nav>
    );
}