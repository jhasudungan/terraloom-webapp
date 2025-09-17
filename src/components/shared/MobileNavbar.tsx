import Link from "next/link";
import { Heart, House, ShoppingCart, Store } from "lucide-react";
import { JSX } from "react";
import { Button } from "flowbite-react";
import LoginLogoutButton from "./LoginLogoutButton";
import HeartOrProfileButton from "./HeartOrProfileButton";

interface MobileNavbarProps {
    isLoggedIn: boolean;
}
const MobileNavbar = ({ isLoggedIn }: MobileNavbarProps): JSX.Element => {

    return (
        <div className="shadow-md sm:hidden">
            <div className="container max-w-5xl flex flex-col p-5 space-y-3">
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
                <div className="flex justify-between space-x-3">
                    <HeartOrProfileButton isLoggedIn={isLoggedIn} />
                    <LoginLogoutButton isLoggedIn={isLoggedIn} />
                </div>
            </div>    
        </div>
    );
    
}

export default MobileNavbar;