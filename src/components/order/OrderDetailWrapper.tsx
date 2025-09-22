import { JSX } from "react";
import Divider from "../shared/Divider";
import OrderDetailCard from "./OrderDetailCard";
import ListOrderItem from "./ListOrderItem";
import CancelOrderButtonWrapper from "./CancelOrderButtonWrapper";
import { OrderWithItems } from "@/schema/entity";

interface OrderDetailWrapper {
    order: OrderWithItems,
}

const OrderDetailWrapper = ({ 
    order,
}: OrderDetailWrapper): JSX.Element => {

    return (
        <div className="container max-w-2xl mx-auto p-3">
            <Divider title="Order Detail" />
            <OrderDetailCard order={order} />
            <ListOrderItem orderItems={order.orderItems} />
            <CancelOrderButtonWrapper order={order} />   
        </div>
    )
}

export default OrderDetailWrapper;