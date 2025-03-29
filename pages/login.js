"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const router = useRouter();

    const handleSignup = async () => {
        try {
            const res = await axios.post(`/api/user/register`, {
                name,
                email,
                password,
            });
            if (res?.data) {
                Cookies.set("user", res.data.token, { expires: 7 });
                alert(res.data.msg);
                router.back();
            }
        } catch (error) {
            alert("Signup failed. Please try again.");
        }
    };

    const handleToggle = () => {
        setLogin(!login);
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(`/api/user/login`, {
                email,
                password,
            });
            if (res?.data) {
                Cookies.set("user", res.data.token, { expires: 7 });
                alert(res.data.msg);
                router.back();
            }
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <Head>
                <title>Roomify - {login ? "Login" : "Sign Up"}</title>
            </Head>

            <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row p-6 lg:p-10">

                    {/* Left Section */}
                    <div className="lg:w-1/2 flex flex-col justify-center text-gray-800 p-5">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                            Experience a Smarter Way to Book Stays
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sign up now and enjoy exclusive discounts on Roomify stays.
                            Get access to unbeatable offers and savings on your travels.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-center bg-red-500 text-white py-3 rounded-t-lg">
                            Sign Up & Get ₹500 Roomify Credits
                        </p>
                        <div className="p-5">
                            <h3 className="text-3xl font-bold my-3 text-gray-800 text-center">
                                {login ? "Login" : "Sign Up"}
                            </h3>
                            <p className="text-md text-gray-600 text-center mb-5">
                                Enter your details to continue
                            </p>

                            {!login && (
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="outline-none border border-gray-300 px-4 py-3 w-full rounded-lg mb-4"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="outline-none border border-gray-300 px-4 py-3 w-full rounded-lg mb-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Enter your password..."
                                className="outline-none border border-gray-300 px-4 py-3 w-full rounded-lg mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full py-3 text-lg font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
                                onClick={login ? handleLogin : handleSignup}
                            >
                                {login ? "Login" : "Sign Up"}
                            </button>

                            <p className="text-center text-gray-700 mt-4">
                                {login ? "Don't have an account?" : "Already have an account?"}
                                <span
                                    className="ml-1 text-red-600 font-semibold cursor-pointer border-b border-red-500"
                                    onClick={handleToggle}
                                >
                                    {login ? " Sign Up" : " Login"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
