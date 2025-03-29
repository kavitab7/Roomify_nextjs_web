"use client";

import { useState } from "react";
import { FaFire } from "react-icons/fa";

const Header4 = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleNotify = () => {
        if (!email.trim()) {
            setError("Please enter your email.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        alert("You have successfully subscribed!");
        setEmail("");
        setError("");
    };

    return (
        <div className="flex flex-wrap justify-between items-center my-10 border-2 rounded-lg border-gray-300 px-6 py-5">
            <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center rounded-full text-3xl mr-5">
                    <FaFire />
                </div>
                <div className="text-lg">
                    <p className="font-bold">Get access to exclusive deals</p>
                    <p className="text-gray-600">Only the best deals reach your inbox</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="relative w-full md:w-auto">
                    <input
                        type="email"
                        className="px-4 py-3 rounded-lg border border-gray-300 w-80 md:w-96 focus:ring-2 focus:ring-red-400 outline-none"
                        placeholder="e.g. john@gmail.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <button
                    type="button"
                    className="w-48 mt-4 md:mt-0 md:ml-4 py-3 rounded-lg bg-red-500 text-lg text-white hover:bg-red-600 transition duration-300"
                    onClick={handleNotify}
                >
                    Notify
                </button>
            </div>
        </div>
    );
};

export default Header4;
