import { JSX } from "react";
import Divider from "../shared/Divider";
import OrderDetailCard from "./OrderDetailCard";
import PaymentForm from "./PaymentForm";
import CancelOrderButtonWrapper from "./CancelOrderButtonWrapper";
import { OrderWithItems } from "@/schema/entity";

interface PaymentOrderDetailWrapperProps {
    order: OrderWithItems
}

const PaymentOrderDetailWrapper = ({ order }: PaymentOrderDetailWrapperProps): JSX.Element => {

    return (
        <>
            <div className="container max-w-2xl mx-auto p-3">
                <Divider title="Complete Order" />
                <OrderDetailCard order={order} />
                {order.payment.status === "PENDING" ? <PaymentForm order={order}/> : <></>}
                <CancelOrderButtonWrapper order={order} />
            </div>
        </>
    )

}

export default PaymentOrderDetailWrapper;