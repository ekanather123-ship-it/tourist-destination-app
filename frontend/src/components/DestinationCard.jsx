import React from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react"; // optional icons
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function DestinationCard({
                                            id,
                                            name,
                                            location,
                                            description,
                                            image,
                                            onDelete,
                                        }) {
    return (
        <div className="relative group bg-white/90 rounded-2xl
        shadow-md hover:shadow-2xl overflow-hidden transition-all
        duration-300 border border-gray-200 hover:scale-[1.02]">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <LazyLoadImage
                    src={image}
                    alt={name}
                    effect="blur"
                    className="w-full h-60 object-cover transform
                    group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Edit/Delete Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link
                        to={`/edit/${id}`}
                        className="bg-white/80 hover:bg-blue-600 text-gray-700 hover:text-white px-3 py-1 rounded-lg shadow-md text-sm flex items-center gap-1"
                    >
                        <Edit2 size={14} />
                        Edit
                    </Link>
                    <button
                        onClick={() => onDelete(id)}
                        className="bg-white/80 hover:bg-red-600 text-gray-700 hover:text-white px-3 py-1 rounded-lg shadow-md text-sm flex items-center gap-1"
                    >
                        <Trash2 size={14} />
                        Delete
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
                <p className="text-sm text-gray-600 mb-3 italic">{location}</p>

                {/* View Details Button Only */}
                <Link
                    to={`/details/${id}`}
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
}