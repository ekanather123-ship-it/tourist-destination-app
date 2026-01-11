import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE from "../api";

export default function DestinationDetails() {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE}/api/destinations/${id}/`)
            .then((response) => response.json())
            .then((data) => setDestination(data))
            .catch((error) => console.error("Error fetching details:", error));
    }, [id]);

    if (!destination) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-72 object-cover rounded-xl mb-6"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {destination.name}
            </h1>
            <p className="text-gray-600 italic mb-4">{destination.location}</p>
            <p className="text-gray-700 leading-relaxed mb-6">
                {destination.description}
            </p>

            <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                ← Back to List
            </Link>
        </div>
    );
}