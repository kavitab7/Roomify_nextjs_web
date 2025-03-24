"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Block from "./Block";
import Link from "next/link";


const Header1 = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const key = Cookies.get("user");
        if (key) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, [auth]);

    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("user");
        setAuth(false);
        router.push("/");
    }

    return (
        <div className=" flex justify-between border-b-2 border-b-gray-300 items-center h-24 px-10" >
            <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={200}
                className=" w-28 h-28"
            />
            <div className=" h-full flex">
                <Block title={"Become a member"} para={"Additional 0% off on stays"} />
                <Block
                    title={"Roomify for business"}
                    para={"Trusted by 10000 corporated"}
                />
                {auth ? (
                    <h3 className=" font-bold cursor-pointer" onClick={handleLogout}>
                        LogOut
                    </h3>) : (
                    <Link href={"/login"} className=" font-bold">
                        Login / Signup
                    </Link>
                )
                }
            </div>

        </div>
    )
}

export default Header1