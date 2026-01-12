import React, { useState } from "react";

export default function AddDestination() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("location", formData.location);
        data.append("description", formData.description);
        data.append("image", formData.image);

        const response = await fetch("https://tourist-destination-app.onrender.com/api/destinations/", {
            method: "POST",
            body: data,
        });

        if (response.ok) {
            setMessage("✅ Destination added successfully!");
            setTimeout(() => {
                window.location.href = "/";
            }, 1500);
        } else {
            setMessage("❌ Failed to add destination!");
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Destination</h2>

            {message && <p className="mb-3 text-green-600">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full border p-2 rounded"
                    rows="3"
                    onChange={handleChange}
                    required
                />

                <input
                    type="file"
                    accept="image/*"
                    className="w-full"
                    onChange={handleFileChange}
                    required
                />

                {preview && (
                    <img
                        src={preview}
                        alt="preview"
                        className="mt-3 rounded shadow-md h-40 w-full object-cover"
                    />
                )}

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Destination
                </button>
            </form>
        </div>
    );
}