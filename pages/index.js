import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>
          Roomify: Your Premier Online Hotel Booking Platform for Safe & Comfortable Stays
        </title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />

      <div className="mx-auto max-w-6xl px-4">
        <div className="my-10">
          <Image
            src={"/banner2.jpg"}
            alt="Luxury Hotel Banner"
            width={1600}
            height={400}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-10">
          <Image
            src={"/banner1.jpg"}
            alt="Comfortable Room Banner"
            width={1600}
            height={200}
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>

        <Header4 />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
