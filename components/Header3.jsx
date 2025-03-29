"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
    const [city, setCity] = useState("");

    return (
        <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-60 flex flex-col justify-center px-5">
            <h2 className="text-3xl md:text-4xl text-white text-center font-bold">
                Over 157,000 hotels and homes across 35 countries
            </h2>

            <div className="flex flex-wrap justify-center my-5 mx-5 md:mx-20">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-6/12 h-14 md:h-16 outline-none px-3 text-lg border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setCity(e.target.value)}
                />

                <Link
                    href={`/hotels?city=${city}`}
                    className="h-14 md:h-16 px-5 md:px-8 bg-yellow-500 hover:bg-yellow-600 text-white text-lg flex items-center justify-center rounded-r-lg transition duration-300"
                >
                    Search
                </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mx-5 md:mx-20 font-bold">
                <button className="h-12 px-4 text-white hover:text-gray-200 transition duration-300">
                    Continue your search
                </button>
                <button className="h-12 px-5 border border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition duration-300 ml-3">
                    Homestay in India hotels
                </button>
            </div>
        </div>
    );
};

export default Header3;
