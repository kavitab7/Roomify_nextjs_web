import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
    if (!e) return null;

    return (
        <div className="border-2 border-red-500 rounded-lg h-auto w-full mb-5 p-5">
            <div className="flex">

                <Image
                    src={e.banner}
                    alt={`${e.name} banner`}
                    width={200}
                    height={200}
                    className="w-96 h-60 object-cover mr-3"
                />

                <div className="flex flex-col justify-between">
                    {e.gallery?.map((ele, index) => (
                        <Image
                            key={index}
                            src={ele}
                            alt={`Gallery image ${index + 1} of ${e.name}`}
                            width={200}
                            height={200}
                            className="w-28 h-16 object-cover"
                        />
                    ))}
                </div>


                <div className="ml-20 flex-1">
                    <h2 className="font-bold text-3xl line-clamp-1">{e.name}</h2>
                    <p className="text-justify my-5 text-lg">{e.description}</p>


                    <div className="text-2xl my-5">
                        <span className="font-bold">Facilities: </span>
                        <ul className="flex flex-wrap">
                            {e.facilities?.map((ele, index) => (
                                <li
                                    key={index}
                                    className="mr-10 mb-3 flex items-center"
                                >
                                    <Image
                                        src={ele.img}
                                        width={32}
                                        height={32}
                                        alt={ele.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="ml-5">{ele.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex items-center">
                        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
                            Price: &#8377; {e.price}
                        </button>
                        <Link
                            href={`/hotels/${e._id}`}
                            className="text-xl font-bold text-red-600 ml-10"
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
