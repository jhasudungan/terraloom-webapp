"use client"
import { OrderWithItems } from "@/schema/entity"
import { Button } from "flowbite-react"
import Link from "next/link"
import { JSX } from "react"

interface CompletePaymentButtonProps {
    orderStatus: string,
    orderReference: string
}

const CompletePaymentButtonWrapper = ({ orderStatus, orderReference }: CompletePaymentButtonProps): JSX.Element => {

    if (orderStatus === "PENDING PAYMENT") {
        return (
            <Button className="w-full my-5" as={Link} href={`/order/payment/${orderReference}`} color={"green"}>
                Complete Order Payment
            </Button>
        )

    }

    return <></>
}

export default CompletePaymentButtonWrapper;