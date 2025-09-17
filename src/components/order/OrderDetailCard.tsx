import { OrderWithItems } from "@/schema/entity";
import { formatDate } from "@/util/general";
import { JSX } from "react";
import BadgeOrder from "./BadgeOrder";

interface OrderDetailCardProps {
    order: OrderWithItems
}

const renderOrderStatus = (status: string): JSX.Element => {

    switch (status) {
        case "PENDING PAYMENT":
            return <BadgeOrder color="amber" status="PENDING PAYMENT"/> // warmer yellow
        case "PAYMENT RECEIVED":
            return <BadgeOrder color="indigo" status="PAYMENT RECEIVED"/> // distinct from processed
        case "PROCESSED":
            return <BadgeOrder color="blue" status="PROCESSED"/>                  
        case "FINISHED":
            return <BadgeOrder color="green" status="FINISHED"/>
        case "CANCELLED":
            return <BadgeOrder color="red" status="CANCELLED"/>    
        default:
            return <BadgeOrder color="gray" status="N/A" />   
    }

}

const renderPaymentStatus = (status: string): JSX.Element => {

    switch (status) {
        case "PENDING":
            return <BadgeOrder color="amber" status="PENDING"/> // warmer yellow
        case "RECEIVED":
            return <BadgeOrder color="indigo" status="RECEIVED"/> // distinct from processed             
        case "CANCELLED":
            return <BadgeOrder color="red" status="CANCELLED"/>
        case "REFUNDED":      
        default:
            return <BadgeOrder color="gray" status="REFUNDED" />   
    }

}

const OrderDetailCard = ({ order }:OrderDetailCardProps): JSX.Element => {

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between  bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="space-y-3 my-3">
                    <div>
                        <p className="text-gray-800 font-medium">Order Reference</p>
                        <p className="text-gray-800 font-light">{order.orderReference}</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium">Order Date</p>
                        <p className="text-gray-800 font-light">{formatDate(order.orderDate)}</p>
                        <p className="text-gray-500 text-sm italic">*Transaction recorded on western indonesian time</p>
                    </div>
                </div>
                <div className="space-y-3 my-3">
                    <div>
                        <p className="text-gray-800 font-medium sm:text-right">Total Transaction</p>
                        <p className="text-gray-800 font-light sm:text-right">Rp. {new Intl.NumberFormat('id-ID').format(order.total)}</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium sm:text-right">Order Status</p>
                        <p className="text-gray-800 font-light sm:text-right">{renderOrderStatus(order.status)}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between  bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow my-5">
                <div className="space-y-3 my-3">
                    <div>
                        <p className="text-gray-800 font-medium sm:text-left">Delivery Address</p>
                        <p className="text-gray-800 font-light sm:text-left">{order.deliveryAddress}</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between  bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow my-5">
                <div className="space-y-3 my-3">
                    <div>
                        <p className="text-gray-800 font-medium sm:text-left">Payment Reference</p>
                        <p className="text-gray-800 font-light sm:text-left">{order.payment.paymentReference}</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium sm:text-left">Card Holder Name</p>
                        <p className="text-gray-800 font-light sm:text-left">{order.payment.cardHolderName ? order.payment.cardHolderName : "N/A"}</p>
                    </div>
               </div>
                <div className="space-y-3 my-3">
                    <div>
                        <p className="text-gray-800 font-medium sm:text-right">Payment Status</p>
                        <p className="text-gray-800 font-light sm:text-right">{renderPaymentStatus(order.payment.status)}</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium sm:text-right">Card Number</p>
                        <p className="text-gray-800 font-light sm:text-right">{order.payment.cardNumber ? order.payment.cardNumber : "N/A"}</p>
                    </div>
                </div>
            </div>
            
        </>)
}

export default OrderDetailCard;