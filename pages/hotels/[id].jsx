"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header1 from "../../components/Header1";

const SingleHotel = ({ hotel }) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const cookie = Cookies.get("user");
        setAuth(!!cookie);
    }, []);

    return (
        <>
            <Head>
                <title>{hotel?.name || "Hotel Details"}</title>
            </Head>
            <Header1 />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
                {/* Hotel Banner */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                    {hotel?.banner ? (
                        <Image
                            src={hotel.banner}
                            alt="Hotel Banner"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Hotel Info Section */}
                <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-gray-800">{hotel?.name}</h1>
                    <p className="text-lg text-gray-600 mt-4 text-justify leading-relaxed">
                        {hotel?.description}
                    </p>

                    {/* Price Section */}
                    <div className="mt-6">
                        <button className="w-full md:w-64 h-14 rounded-lg bg-blue-500 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition-all">
                            Price: ₹{hotel?.price}
                        </button>
                    </div>

                    {/* Facilities Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Facilities</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                            {hotel?.facilities?.map((ele) => (
                                <li key={ele.name} className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-sm">
                                    <span className="text-lg text-gray-700">{ele.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Booking Section */}
                    <div className="mt-8 text-center">
                        {auth ? (
                            <button className="w-full md:w-64 h-14 rounded-lg bg-red-500 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition-all">
                                Book Now
                            </button>
                        ) : (
                            <p className="text-xl text-gray-700">
                                Please{" "}
                                <Link href="/login">
                                    <span className="text-blue-500 hover:underline cursor-pointer">
                                        Log in
                                    </span>
                                </Link>{" "}
                                to get exclusive offers!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

// Fetch hotel details on the server side
export async function getServerSideProps(ctx) {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
        const data = await res.json();

        return {
            props: {
                hotel: data.hotel || null,
            },
        };
    } catch (error) {
        console.error("Error fetching hotel details:", error);
        return { props: { hotel: null } };
    }
}

export default SingleHotel;
