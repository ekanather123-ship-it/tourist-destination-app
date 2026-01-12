import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditDestination() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        location: "",
        description: "",
        image: null,
    });
    const [preview, setPreview] = useState(null);

    // Fetch existing destination data
    useEffect(() => {
        fetch(`https://tourist-destination-app.onrender.com/api/destinations/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setForm({
                    name: data.name,
                    location: data.location,
                    description: data.description,
                    image: null,
                });
                setPreview(data.image);
            });
    }, [id]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", form.name);
        data.append("location", form.location);
        data.append("description", form.description);
        if (form.image) data.append("image", form.image); // Append only if new image selected

        try {
            await fetch(`https://tourist-destination-app.onrender.com/api/destinations/${id}/`, {
                method: "PATCH",
                body: data,
            });
            alert("✅ Destination updated successfully!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("❌ Failed to update destination.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit Destination</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Name"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    value={form.location}
                    placeholder="Location"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    value={form.description}
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
                    onChange={handleImageChange}
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
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}