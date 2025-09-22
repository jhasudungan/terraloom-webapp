"use client";
import { Button } from "flowbite-react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/store/useCart";
import { CartItem } from "@/schema/pagedataschema";
import { JSX } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Product } from "@/schema/entity";


interface ProductDetailProps {
    product: Product,
    isLoggedIn: boolean
}

const ProductDetail = ({ product, isLoggedIn }: ProductDetailProps): JSX.Element => {

    const { addItem } = useCart();

    const handleAddProductToCart = (product: Product) => {

        const cartItem: CartItem = {
            id: String(product.id),
            productName: product.name,
            productImage: product.imageUrl,
            productImageSecure: product.imageUrlSecure,
            quantity: 1,
            price: product.price,
            total: product.price
        }

        toast.info(`${product.name} added to cart`, {
            theme: "light",
        })

        addItem(cartItem);

    }

    return (
        <div className="container mx-auto max-w-5xl">

            <div className="flex flex-col sm:flex-row mt-10">
                <div className="mt-5 aspect-[4/3] sm:aspect-[543/330] p-3 sm:basis-1/2">
                    <Image
                        src={product.imageUrl}
                        alt="banner"
                        width={543}
                        height={330}
                        priority
                        className={`rounded-lg shadow-md animate__animated animate__fadeIn ${!product.isActive || product.stock <= 0
                                ? 'filter grayscale opacity-60'
                                : ''
                            }`}
                    />
                </div>
                <div className="mt-5 p-3 sm:basis-1/2">
                    <p className="text-[clamp(1.125rem,3.5vw,1.75rem)] text-center sm:text-left animate__animated animate__fadeIn">
                        {product.name}
                    </p>
                    <p className="text-3xl mt-5 text-center sm:text-left animate__animated animate__fadeIn">
                        Rp. {new Intl.NumberFormat('id-ID').format(product.price)}
                    </p>
                    <div className="mt-5 max-h-67 overflow-y-auto">
                        <p className="text text-balance font-light animate__animated animate__fadeIn">
                            {product.description}
                        </p>
                    </div>
                    {isLoggedIn ?
                        <Button
                            color={!product.isActive || product.stock <= 0 ? "gray" : "dark"}
                            onClick={() => handleAddProductToCart(product)}
                            className="w-full mt-5 animate__animated animate__fadeIn"
                            disabled={!product.isActive || product.stock <= 0}
                        >
                            <ShoppingCart className="mr-3" />
                            {!product.isActive || product.stock <= 0
                                ? "Product is not available"
                                : "Add This Product To Your Cart"
                            }
                        </Button>
                        :
                        <Button
                            color="dark"
                            as={Link}
                            className="w-full mt-5 animate__animated animate__fadeIn"
                            href="/login"
                        >
                            <ShoppingCart className="mr-3" /> Login To Order
                        </Button>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductDetail;