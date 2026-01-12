import React, { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("https://tourist-destination-app.onrender.com/api/destinations/")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched from backend:", data);
                setDestinations(data);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.length > 0 ? (
                destinations.map((dest, index) => (
                    <DestinationCard
                        key={index}
                        name={dest.name}
                        location={dest.location}
                        description={dest.description}
                        image={dest.image}
                    />
                ))
            ) : (
                <p className="text-center text-gray-600 text-lg col-span-full">
                    No destinations found.
                </p>
            )}
        </div>
    );
}