"use client";

import Image from "next/image";
import { useState } from "react";

const Header4 = () => {
    const [email, setEmail] = useState("");

    const handleNotify = () => {
        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("You have successfully subscribed!");
        setEmail("");
    };

    return (
        <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
            <div className="flex items-center">
                <Image
                    src={"/fire.jpg"}
                    alt="fire"
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mr-5"
                />
                <div className="text-xl">
                    <p className="font-bold">Get access to exclusive deals</p>
                    <p>Only the best deals reach your inbox</p>
                </div>
            </div>
            <div className="flex">
                <input
                    type="email"
                    className="px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300"
                    placeholder="e.g. john@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="button"
                    className="w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer hover:bg-red-600"
                    onClick={handleNotify}
                >
                    Notify
                </button>
            </div>
        </div>
    );
};

export default Header4;
