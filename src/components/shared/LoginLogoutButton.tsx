"use client";
import { Button } from "flowbite-react";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface LoginLogoutButtonProps {
    isLoggedIn: boolean;
}

const LoginLogoutButton =  ({ isLoggedIn }:LoginLogoutButtonProps):JSX.Element => {

    const handleLogout = async () => {
        await fetch('/api/auth/logout')
        window.location.href = '/'
    }
   
    if (!isLoggedIn) {
        return(
            <Button className="grow sm:grow-0" as={Link} color={"dark"} href={"/login"}>
                <LogIn className="mr-2"/>
            </Button>
        );
    }

    return(
       <>
            <Button className="grow sm:grow-0" color={"dark"} onClick={() => handleLogout()}>
                <LogOut className="mr-2"/>
            </Button>
        </>
    );
   
};

export default LoginLogoutButton;