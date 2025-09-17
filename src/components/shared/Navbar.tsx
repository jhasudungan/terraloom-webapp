"use client";
import { Button } from "flowbite-react"
import { AlignJustify, House, ShoppingBag, ShoppingCart, Store } from "lucide-react"
import Link from "next/link";
import { JSX } from "react";
import LoginLogoutButton from "./LoginLogoutButton";
import HeartOrProfileButton from "./HeartOrProfileButton";

interface NavbarProps {
    isLoggedIn: boolean;
}

const Navbar = ({ isLoggedIn }: NavbarProps):JSX.Element => {

    return (
        <div className="shadow-md top-0 z-100">
            <div className="container max-w-5xl mx-auto p-3 flex sm:flex-row justify-between items-center">
                
                {/* Page Icon */}
                <ShoppingBag />
                
                {/* Wide Screen Menu */}
                <div className="sm:flex sm:space-x-5 hidden">
                    <Button as={Link} color={"light"}  href={"/"} >
                        <House className="mr-2" />
                        Home
                    </Button>
                    <Button as={Link} color={"light"} href={"/shop"}>
                        <Store className="mr-2" />
                        Shop
                    </Button>
                    <Button as={Link} color={"light"} href={"/cart"}>
                        <ShoppingCart className="mr-2" />
                        Your Cart
                    </Button>
                </div>

                {/* Wide Screen Menu */}
                <div className="sm:flex sm:space-x-5 hidden">
                    <HeartOrProfileButton isLoggedIn={isLoggedIn} />
                    <LoginLogoutButton isLoggedIn={isLoggedIn} />
                </div>

                {/* Hamburger */}
                <div className="sm:hidden">
                    <Button color={"dark"}>
                        <AlignJustify />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Navbar;