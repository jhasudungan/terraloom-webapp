"use client"
import { CartItem } from "@/schema/pagedataschema";
import { useCart } from "@/store/useCart";
import { Alert, Button } from "flowbite-react";
import Link from "next/link";
import { JSX } from "react";

const CartItemList = ():JSX.Element => {

    const { cartItems, increaseItem, decreaseItem , clearCart } = useCart()
    
    const handleIncreaseItem = (cartItem: CartItem) => {
        increaseItem(cartItem);
    }

    const handleDecreaseItem = (cartItem: CartItem) => {
        decreaseItem(cartItem);
    }

    const renderMessageNoItem = (cartItems: CartItem[]): JSX.Element => {

        if (cartItems.length < 1) {
            return (
                <Alert>
                    Your'e cart is empty , start shop now!
                </Alert>
            )
        }

        return <></>
    }

    return (
        <>
            <div className="flex flex-col m-5 bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-shadow transition-shadow max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                {renderMessageNoItem(cartItems)}
                {cartItems.map((item: CartItem) => (

                    <div className="border-1 border-solid border-gray-800 rounded-2xl p-3 my-5 flex gap-3" key={item.id}>
                        <div className="flex-shrink-0">
                            <img
                                src={item.productImage}
                                alt={item.productName ? item.productName : "Product image"}
                                className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </div>

                        <div className="flex-1">
                            <Link href={`/shop/${item.id}`} className="text font-medium hover:text-blue-600 transition-colors">
                                {item.productName ? item.productName : ""}
                            </Link>
                            <p className="text font-extralight">{item.quantity ? item.quantity : ""} X Rp. {item.price ? new Intl.NumberFormat('id-ID').format(item.price) : ""}</p>
                            <p className="text font-extralight">Rp {item.total ? new Intl.NumberFormat('id-ID').format(item.total) : ""}</p>

                            <div className="flex space-x-3 mt-3">
                                <Button color={"dark"} onClick={(e) => handleIncreaseItem(item)} size="sm">
                                    +
                                </Button>
                                <p className="text-xl font-semibold">{item.quantity}</p>
                                <Button color={"dark"} onClick={(e) => handleDecreaseItem(item)} size="sm">
                                    -
                                </Button>
                            </div>

                        </div>
                    </div>
                        
                    
                
                ))}

            </div>
        </>
    )
}

export default CartItemList;