import { JSX } from "react";
import MobileNavbar from "./MobileNavbar";
import { checkLoggedIn } from "@/util/httpUtil";

const MobileNavbarWrapper = async (): Promise<JSX.Element> => {
    const isLoggedIn: boolean = await checkLoggedIn();
    return <MobileNavbar isLoggedIn={isLoggedIn} />
}

export default MobileNavbarWrapper;