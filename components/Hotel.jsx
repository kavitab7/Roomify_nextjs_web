import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
    return (
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white p-5 w-full max-w-3xl mx-auto transition-transform hover:shadow-xl hover:-translate-y-1">
            {/* Hotel Banner & Gallery */}
            <div className="flex flex-col md:flex-row gap-5">
                {/* Main Hotel Image */}
                <div className="flex-shrink-0">
                    <Image
                        src={e?.banner}
                        alt="Hotel Image"
                        width={250}
                        height={200}
                        className="w-full md:w-60 h-40 md:h-48 rounded-lg object-cover"
                    />
                </div>

                {/* Hotel Gallery */}
                <div className="flex flex-wrap gap-2 md:w-1/3">
                    {e?.gallery?.slice(0, 4).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt="Hotel Gallery"
                            width={80}
                            height={60}
                            className="w-16 h-12 rounded-md object-cover"
                        />
                    ))}
                </div>

                {/* Hotel Details */}
                <div className="flex-1">
                    <h2 className="font-bold text-xl md:text-2xl line-clamp-1">{e?.name}</h2>
                    <p className="text-gray-600 text-sm md:text-base mt-2 line-clamp-2">{e?.description}</p>

                    {/* Facilities */}
                    <div className="mt-4">
                        <span className="font-bold text-lg">Facilities:</span>
                        <ul className="flex flex-wrap gap-3 mt-2">
                            {e?.facilities?.map((facility, index) => (
                                <li key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
                                    {facility.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pricing & Details Button */}
                    <div className="flex items-center justify-between mt-6">
                        <button className="px-5 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
                            Price: ₹{e?.price}
                        </button>
                        <Link
                            href={`/hotels/${e?._id}`}
                            className="text-lg ml-1 font-bold text-gray-500 hover:underline"
                        >
                            See Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
