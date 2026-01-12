import React, { useEffect, useState, useMemo } from "react";
import DestinationCard from "./DestinationCard";
import API_BASE from "../api";



const DestinationList = ({ searchTerm }) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        let mounted = true;

        fetch("https://tourist-destination-app.onrender.com/api/destinations/")
            .then((response) => {
                if (!response.ok) throw new Error(`API error ${response.status}`);
                return response.json();
            })
            .then((data) => {
                if (!mounted) return;
                // API might return array or paginated { results: [...] }
                const list = Array.isArray(data) ? data : (data.results ?? []);
                setDestinations(list);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // optionally setDestinations([]) or show UI error state
            });

        return () => { mounted = false; };
    }, []); // run once

    // ensure searchTerm is always a string
    const normalizedSearch = String(searchTerm ?? "").toLowerCase().trim();

    const filteredDestinations = useMemo(() => {
        // Guard: ensure we operate on an array
        const list = Array.isArray(destinations) ? destinations : [];

        return list.filter((dest) => {
            // Safety: coerce to string before calling toLowerCase
            const name = String(dest?.name ?? "").toLowerCase();
            const location = String(dest?.location ?? "").toLowerCase();

            return (
                name.includes(normalizedSearch) || location.includes(normalizedSearch)
            );
        });
    }, [destinations, normalizedSearch]);
    const handleDelete = async (id) => {
        try {
            await fetch(`https://tourist-destination-app.onrender.com/api/destinations/${id}/`, {
                method: "DELETE",
            });

            setDestinations((prev) => prev.filter((d) => d.id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        id={destination.id}
                        name={destination.name}
                        location={destination.location}
                        description={destination.description}
                        image={destination.image}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500 mt-10 text-lg">
                    No destinations found.
                </p>
            )}
        </div>
    );
};

export default DestinationList;