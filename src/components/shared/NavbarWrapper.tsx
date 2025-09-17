import { JSX } from "react";
import { checkLoggedIn } from "@/util/httpUtil";
import Navbar from "./Navbar";

const NavbarWrapper = async ():Promise<JSX.Element> => {
    const isLoggedIn: boolean = await checkLoggedIn();
    return <Navbar isLoggedIn={isLoggedIn} />
}

export default NavbarWrapper;