"use client"
import { OrderWithItems } from "@/schema/entity";
import { Button } from "flowbite-react";
import { JSX } from "react";
import { toast } from "react-toastify";

interface CancelOrderButtonProps {
    order: OrderWithItems
}

const CancelOrderButtonWrapper = ({ order } : CancelOrderButtonProps): JSX.Element => {

    const handleCancelOrder = async () => {

        const requestBody = {
            orderReference: order.orderReference
        }

        const res = await fetch('/api/order/cancel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (res.ok) {
            toast.info('Your Order has been cancelled !', {
                theme: "light"
            })
            window.location.href = "/order";
        } else {
            toast.error('Error Cancel Order', {
                theme: "light"
            });
            return
        }
    }

    if (order.status === "PENDING PAYMENT" || order.status === "PAYMENT RECEIVED" ) {
        return (
            <>
                <div className="flex flex-col justify-center  bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">  
                    <Button color={"red"} 
                        onClick={() => handleCancelOrder()} 
                        className="w-full">Cancel Order</Button>
                </div>
            </>
        )
    }

    return <></>
    
}

export default CancelOrderButtonWrapper;