import { JSX } from "react";
import { CollectionBanner } from "@/schema/pagedataschema";
import collectionBannersData from "@/data/collection-banner.json"; 
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Divider from "../shared/Divider";


const CollectionBannerList = ():JSX.Element => {

    const collectionBanners: CollectionBanner[] = collectionBannersData;

    return (
        <>
            <div className="container max-w-5xl mx-auto">
                <Divider title="Our Collection" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
                    {collectionBanners.map(collectionBanner => (
                        <Card imgSrc={collectionBanner.bannerImage} key={collectionBanner.id}>
                            <p className="text-center font-semibold">{collectionBanner.bannerTitle}</p>
                            <p className="text-center font-extralight">{collectionBanner.bannerTagline}</p>
                            <Button color={"light"} as={Link} href={"/shop"}>
                                <ShoppingCart className="mr-3"/>
                                Shop Now
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CollectionBannerList;