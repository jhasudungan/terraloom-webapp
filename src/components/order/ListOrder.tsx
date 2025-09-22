import Divider from "../shared/Divider";
import { formatDate } from "@/util/general";
import { JSX } from "react";
import BadgeOrder from "./BadgeOrder";
import ListOrderPagination from "./ListOrderPagination";
import { Alert, Button } from "flowbite-react";
import Link from "next/link";
import { Metadata } from "@/schema/response";
import { Order } from "@/schema/entity";
import CompletePaymentButtonWrapper from "./CompletePaymentButtonWrapper";

interface ListOrderProps {
    orders: Order[],
    metadata: Metadata 
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

const renderNoOrder = (orders: Order[]):JSX.Element => {

    if (orders.length < 1) {
        return (
            <Alert color="success">You dont have any order</Alert>
        )
    }

    return <></>

}

const ListOrder = ({ orders , metadata }: ListOrderProps): JSX.Element => {
   
    // TODO : Order Filter
    return (
        <div className="container max-w-2xl mx-auto p-3">
            <Divider title="Your Order" />
            {renderNoOrder(orders)}
            <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-120 p-3">
                {orders.map(order => (
                    <div  key={order.orderReference} className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div
                            className="flex justify-between items-center "
                        >
                            <div className="space-y-">
                                <p className="">Order Reference</p>
                                <p className="text-gray-800 font-medium">{order.orderReference}</p>
                                <p className="text-sm text-gray-500">Total</p>
                                <p className="text-gray-800 font-medium">Rp {new Intl.NumberFormat('id-ID').format(order.total)}</p>
                                <p className="text-sm text-gray-500">Order Date</p>
                                <p className="text-gray-800 font-medium">{formatDate(order.orderDate)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Status</p>
                                {renderOrderStatus(order.status)}
                            </div>
                        </div>
                        <Button className="w-full my-5" as={Link} href={`order/${order.orderReference}`} color={"dark"}>See Detail</Button>
                        <CompletePaymentButtonWrapper 
                            orderStatus={order.status}
                            orderReference={order.orderReference}
                        />
                    </div>                        
                ))}
            </div>
            <ListOrderPagination 
                currentPage={metadata.page} 
                totalPages={metadata.totalPage}
            />
        </div>
    )
}

export default ListOrder;