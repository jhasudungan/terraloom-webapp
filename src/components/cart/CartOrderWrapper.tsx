"use client"
import { JSX, useState } from "react"
import CartItemList from "./CartItemList";
import { Account } from "@/schema/entity";
import CartOrderAccountInformation from "./AccountInformation";
import { useCart } from "@/store/useCart";
import { toast } from "react-toastify";

interface CartOrderWrapperProps {
    account: Account
}

const CartOrderWrapper = ({ account } : CartOrderWrapperProps):JSX.Element => {

   const { cartItems , clearCart } = useCart()
   const [deliveryAddress, setDeliveryAddress] = useState(account.registeredAddress);

   const handlePlaceOrder = async () => {

        const confirmOrder = window.confirm("Are you sure you want to place the order?");
        if (!confirmOrder) return; 
       
        // Sent an order request to transaction api
        const orderitems: object[] = []

        cartItems.forEach(item => {

            const price = typeof item.price === 'string' ? parseInt(item.price) : item.price;
            
            const orderItem: object = {
                productId: Number(item.id),
                quantity: Number(item.quantity),
                priceUsed: Number(price),
                productName: item.productName,
                productImageUrl: item.productImage,
                productImageUrlSecure: item.productImageSecure
            }

            orderitems.push(orderItem)
            
        })

        const newOrderRequest: object = {
            "orderItems": orderitems,
            "deliveryAddress": deliveryAddress
        }

        const response = await fetch('/api/order/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrderRequest),
        });

        if (response.status == 200) {
            toast.success("Successfully places your order")
            clearCart();
        } else {
            toast.error("Failed to place your order")
        }
        
    }

   return (
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row">
            <div className="sm:w-2/3">
                <CartItemList />
            </div>
            <div className="sm:w-1/3">
                <CartOrderAccountInformation 
                    displayName={account.displayName}
                    deliveryAddress={deliveryAddress}
                    setDeliveryAddress={setDeliveryAddress}
                    handlePlaceOrder={handlePlaceOrder}
                />
            </div>
        </div>
    )
}

export default CartOrderWrapper;