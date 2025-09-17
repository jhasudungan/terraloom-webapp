import { Button, ButtonGroup } from "flowbite-react";
import { Heart, Logs, User } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface HeartOrProfileButtonProps {
    isLoggedIn: boolean
}

const HeartOrProfileButton = ({ isLoggedIn } : HeartOrProfileButtonProps):JSX.Element => {
    
    if (!isLoggedIn) {
        return(
            <Button as={Link} className="grow sm:grow-0"  color={"dark"} href={"/"}>
                <Heart className="mr-2"/> Show Support
            </Button>
        );
    }

    return(
       <>
           <ButtonGroup className="">
                <Button as={Link} className="grow sm:grow-0" color={"dark"} href={"/order?page=1"}>
                    <Logs className="mr-2" /> Order
                </Button>
                <Button as={Link} className="grow sm:grow-0" color={"dark"} href={"/profile"}>
                    <User className="mr-2"/> Profile
                </Button>
           </ButtonGroup>
        </>
    );
}

export default HeartOrProfileButton;