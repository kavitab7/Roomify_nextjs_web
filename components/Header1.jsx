"use client";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Block from "./Block";
import { FaHotel } from "react-icons/fa";

const Header1 = () => {
    const [auth, setAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const key = Cookies.get("user");
        setAuth(!!key);
    }, []);

    const handleLogout = () => {
        Cookies.remove("user");
        setAuth(false);
        router.push("/");
    };

    return (
        <header className="flex justify-between items-center h-24 px-10 border-b-2 border-gray-300 bg-white shadow-md">
            {/* Logo */}
            <Link href="/">
                <FaHotel className="text-3xl" />
                <span className=" mr-3" >RoomiFY</span>
            </Link>

            {/* Menu Blocks */}
            <div className="h-full flex items-center space-x-6">
                <Block title="Become a member" para="Additional 0% off on stays." />
                <Block title="Roomify for business" para="Trusted by 5000 corporates." />
                <Block title="List your property" para="Start earning in 30 min." />
                <Block title="1234454321" para="Call us to book now." />

                {/* Login/Logout Section */}
                <div className="flex items-center px-3">
                    <FiUser className="text-3xl text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer" />
                    {auth ? (
                        <button
                            onClick={handleLogout}
                            className="ml-2 font-bold text-red-500 hover:text-red-700 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login" className="ml-2 font-bold text-blue-500 hover:text-blue-700 transition duration-300">
                            Login / Signup
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header1;
