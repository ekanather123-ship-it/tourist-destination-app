import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DestinationList from "./components/DestinationList";
import DestinationDetails from "./pages/DestinationDetails";
import AddDestination from "./pages/AddDestination";
import EditDestination from "./pages/EditDestination";

function App() {


        const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="relative min-h-screen text-gray-900 font-sans">
            {/* Background image */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/backgroundmain4.jpg')",
                    filter: "brightness(0.65)",
                }}
            ></div>

            <Router>
                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/1 border-b border-white/10 shadow-md">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 text-white">
                        <h1 className="mb-2 text-3xl font-extrabold text-gray-900
                         dark:text-white md:text-3xl lg:text-4xl">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r
                                 to-emerald-900 from-sky-600">MY </span>Destinations</h1>
                        {/* Search Bar */}
                        <div className="flex-1 mx-8 max-w-md">
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        <div className="space-x-6">
                            <Link to="/" className="hover:text-sky-400 text-2xl transition">
                                Home
                            </Link>
                            <Link to="/add" className="hover:text-sky-400 text-2xl  transition">
                                Add Destination
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Main content */}
                <main className="pt-28 pb-10 px-4 sm:px-8 lg:px-16 relative z-10">
                    <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-8">
                        <Routes>
                            <Route path="/" element={<DestinationList searchTerm={searchTerm} />} />
                            <Route path="/" element={<DestinationList />} />
                            <Route path="/add" element={<AddDestination />} />
                            <Route path="/edit/:id" element={<EditDestination />} />
                            <Route path="/details/:id" element={<DestinationDetails />} />
                        </Routes>
                    </div>
                </main>
            </Router>
        </div>
    );
}

export default App;