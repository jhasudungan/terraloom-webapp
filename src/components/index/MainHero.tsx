import Image from "next/image";
import { JSX } from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

// Define the props in paramete
const MainHero = (): JSX.Element => {

    const bannerTitle:string = "Made for Living, Not Just Housing.";
    const bannerSubtitle:string = "A home is more than a space — it’s where comfort, style, and personality come together. Discover thing's that brings warmth and soul to every room.";
    const bannerButtonValue:string = "Check Our Collection Now";

    return (
        <div className="container max-w-5xl mx-auto flex sm:flex-row flex-col-reverse">
            <div className="mt-5 p-3">
                <p className="text-[clamp(1.75rem,6vw,3.5rem)] text-center sm:text-left tracking-tighter text-balance leading-tight">
                    {bannerTitle}
                </p>
                <p className="text-lg text-gray-600 font-light mt-5 text-center sm:text-left text-balance sm:mb-15 mb-10">
                    {bannerSubtitle}
                </p>
                <div className="mt-3 flex">
                    <Button color={"light"} className="flex-1" as={Link} href={"/shop"}>
                        {bannerButtonValue}
                    </Button>
                </div>
            </div>
            <div className="mt-5 aspect-[4/3] sm:aspect-[1280/583] p-3">
                {/* Image */}
                <Image 
                    src={"/terraloom-hero.jpg"} 
                    alt="banner" 
                    width={1280}
                    height={853}
                    priority
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    )

}

export default MainHero;