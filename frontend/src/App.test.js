import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react"; // optional icons from lucide-react

export default function DestinationCard({
                                            id,
                                            name,
                                            location,
                                            description,
                                            image,
                                            onDelete,
                                        }) {
    return (
        <div className="relative group bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden
         transition-all duration-300 border border-gray-200 hover:scale-[1.02]">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay buttons */}
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
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
                <p className="text-sm text-gray-600 mb-2 italic">{location}</p>

                <p className="text-gray-700 text-sm line-clamp-3">
                    {description || "No description available."}
                </p>

                {/* Read More */}
                <div className="mt-3">
                    <Link
                        to={`/details/${id}`}
                        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:shadow-lg transition"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    );
}