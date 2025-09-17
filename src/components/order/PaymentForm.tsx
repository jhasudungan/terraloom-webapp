"use client"
import { JSX, useState } from "react";
import { toast } from "react-toastify";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { OrderWithItems } from "@/schema/entity";
import Image from "next/image";


interface PaymentFormProps {
    order: OrderWithItems
}

const PaymentForm = ({ order }: PaymentFormProps): JSX.Element => {

    const [cardHolderName, setCardHolderName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [expMonth, setExpMonth] = useState("")
    const [expYear, setExpYear] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (cardHolderName === "" || cardNumber === "" || cvv === "" || expMonth === "" || expYear === "") {
            toast.warning("Please fill out payment data")
            return
        }

        if (cvv.length > 3 || expMonth.length > 2 || expYear.length > 2) {
            toast.warning("Please check your payment data")
            return
        }

        const requestBody = {
            orderReference: order.orderReference,
            cardHolderName: cardHolderName,
            cardNumber: cardNumber,
            status: "RECEIVED"
        }

        const res = await fetch('/api/payment/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (res.ok) {

            toast.success("Success Paid ! Thanks For Purchasing", {
                theme: "light",
                autoClose: 2000, // Auto close after 2 seconds
            });

            window.location.href = `/order/${order.orderReference}`;
        } else {
            toast.error('Error Submit Payment', {
                theme: "light"
            });
            return
        }
    }

    return (
        <>
            <div className="my-5 bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-center">
                    <p className="text-gray-800 font-bold">Credit / Debit Card</p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex space-x-3 justify-center">
                        <Image 
                            src={"/visa-svgrepo-com.svg"} 
                            alt="visa-logo" 
                            width={50}
                            height={25}
                        />
                        <Image 
                            src={"/mastercard-svgrepo-com.svg"} 
                            alt="mastercard-logo" 
                            width={50}
                            height={25}
                        />
                        <Image 
                            src={"/american-express-svgrepo-com.svg"} 
                            alt="amex-logo" 
                            width={50}
                            height={25}
                        />
                        <Image 
                            src={"/jcb-logo.svg"} 
                            alt="jcb-logo" 
                            width={50}
                            height={25}
                        />
                        <Image 
                            src={"/gpn-logo.svg"} 
                            alt="gpn-logo" 
                            width={25}
                            height={25}
                        />
                    </div>

                    <div>
                        <Label htmlFor="carholderName1" className="mb-3">Amount</Label>
                        <TextInput
                            id="carholderName1"
                            className="w-full"
                            type="text"
                            placeholder="Jeremiah Johnson"
                            value={`Rp. ${new Intl.NumberFormat('id-ID').format(order.payment.total)}`}
                            readOnly
                            disabled
                            />
                    </div>

                    <div>
                        <Label htmlFor="carholderName1" className="mb-3">Card Holder Name</Label>
                        <TextInput
                            id="carholderName1"
                            className="w-full"
                            type="text"
                            placeholder="Jeremiah Johnson"
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            required />
                    </div>

                    <div>
                        <Label htmlFor="card1" className="mb-3">Card Number</Label>
                        <TextInput
                            id="card1"
                            className="w-full"
                            type="number"
                            placeholder="1234 1234 1234 1234"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-3 space-y-5">
                        <div className="sm:w-1/3">
                            <Label htmlFor="cvv1" className="mb-3">CVV</Label>
                            <TextInput
                                id="cvv1"
                                className="w-full"
                                type="number"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                required />
                        </div>
                        <div className="sm:w-1/3">
                            <Label htmlFor="expiration1" className="mb-3">Expiration Month</Label>
                            <Select
                                id="expiration1"
                                className="w-full"
                                value={expMonth}
                                onChange={(e) => setExpMonth(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select Month</option>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                    <option key={month} value={month}>
                                        {month.toString().padStart(2, "0")}
                                    </option>
                                ))}
                            </Select>
                        </div> 
                        <div className="sm:w-1/3">
                            <Label htmlFor="expiration2" className="mb-3">Expiration Year</Label>
                            <Select
                                id="expiration2"
                                className="w-full"
                                value={expYear}
                                onChange={(e) => setExpYear(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select Year</option>
                                {Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                    <option key={year} value={year.toString().slice(-2)}>
                                        {year}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <Button className="w-full" type="submit" color={"green"}>Process Payment</Button>
                </form>
                <div className="flex justify-center">
                    <Image 
                        src={"/pci-dss-compliant-logo-vector.svg"} 
                        alt="PCI DSS Compliant - Secure Payment Processing" 
                        width={200}
                        height={80}
                    />
                </div>
            </div>
        </>)
}

export default PaymentForm;