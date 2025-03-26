"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

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
                <title>Roomify - Login</title>
            </Head>
            <div className="flex h-screen justify-center items-center bg-gray-100">
                <div className="absolute top-10 px-10 text-center">
                    <h2 className="text-5xl font-bold text-red-600">Roomify</h2>
                    <p className="text-lg font-semibold text-gray-700">
                        Hotels and stays across 800 cities, 24+ countries
                    </p>
                </div>
                <div className="flex justify-center items-center w-9/12">
                    <div className="text-gray-800">
                        <p className="font-bold text-4xl text-justify">
                            Experience a Smarter Way to Book Stays
                        </p>
                        <p className="text-lg mt-5 text-justify">
                            Sign up now and enjoy exclusive discounts on Roomify stays.
                            Get access to unbeatable offers and savings on your travels.
                        </p>
                    </div>
                    <div className="ml-10 pb-10 w-10/12 bg-white shadow-lg rounded-lg p-8">
                        <p className="h-12 flex items-center justify-center bg-red-500 text-lg font-bold text-white rounded-t-lg">
                            Sign Up & Get ₹500 Roomify Credits
                        </p>
                        <div className="p-6">
                            <h3 className="text-4xl font-bold my-5 text-gray-800">
                                {login ? "Login" : "Sign Up"}
                            </h3>
                            <p className="font-semibold text-md mb-3 text-gray-600">
                                Enter your details to continue
                            </p>
                            {!login && (
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="outline-none border my-3 border-gray-300 px-4 py-2 w-full rounded-lg"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="outline-none border my-3 border-gray-300 px-4 py-2 w-full rounded-lg"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Enter your password..."
                                className="outline-none border my-3 border-gray-300 px-4 py-2 w-full rounded-lg"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full h-12 text-lg font-bold bg-red-500 hover:bg-red-600 text-white my-5 rounded-lg transition duration-300"
                                onClick={login ? handleLogin : handleSignup}
                            >
                                {login ? "Login" : "Sign Up"}
                            </button>
                            <p className="text-md text-center text-gray-700">
                                {login
                                    ? "Don't have an account?"
                                    : "Already have an account?"}
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
