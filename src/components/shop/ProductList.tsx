"use client"
import { JSX , useState } from "react";
import { Button, Card, TextInput } from "flowbite-react";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

import ProductListPagination from "./ProductListPagination";
import Divider from "../shared/Divider";
import { Product } from "@/schema/entity";
import { Metadata } from "@/schema/response";
import { useRouter } from 'next/navigation'; 

interface ProductListProps {
    products: Product[],
    metadata: Metadata
}

const ProductList = ({ 
       metadata, products }: ProductListProps): JSX.Element => {
 
    const [enteredQuery, setEnteredQuery] = useState("");
    const router = useRouter();

    const runFilter = () => {

        const params: URLSearchParams = new URLSearchParams({
            'name': enteredQuery,
            'page': "1"
        });

        const filterEndpoint = `/shop?${params.toString()}`;
        router.push(filterEndpoint);
        
    }
    
    return (
        <>
            <div className="container mx-auto max-w-5xl flex flex-col p-5 space-y-3">
                <Divider title="Best Choice From Us" />
                
                {/* Search Bar */}
                <div className="flex w-full space-x-2">
                    <TextInput type="text" 
                        className="flex-grow"
                        placeholder="Find product "
                        value={enteredQuery}
                        onChange={(e) => setEnteredQuery(e.target.value)}
                     />
                    <Button color={"dark"} onClick={() => runFilter()} ><Search /></Button>
                </div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        
                        <Card className="animate__animated animate__fadeIn" key={product.id} imgSrc={product.imageUrl}>
                            <p className="text-left font-semibold mt-3">{product.name}</p>
                            <Button color={"dark"} as={Link} href={`/shop/${product.id}`}>
                                <ShoppingCart className="mr-3"/> 
                                <p className="text-left font-bold text-white">Rp. {new Intl.NumberFormat('id-ID').format(product.price)}</p>
                            </Button>
                        </Card>
                    ))}
                </div>
                <ProductListPagination 
                    totalPages={metadata.totalPage} 
                    currentPage={metadata.page}
                    query={enteredQuery}
                />
            </div>
        </>
    )

}

export default ProductList;