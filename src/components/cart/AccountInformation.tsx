import { useCart } from "@/store/useCart";
import { Button, Label, Textarea, TextInput } from "flowbite-react"
import React, { JSX } from "react"

interface CartOrderAccountInformationProps {
    displayName: string,
    deliveryAddress: string,
    setDeliveryAddress: React.Dispatch<React.SetStateAction<string>>;
    handlePlaceOrder:  () => Promise<void>
}

const CartOrderAccountInformation = ({ displayName, deliveryAddress , setDeliveryAddress, handlePlaceOrder }:CartOrderAccountInformationProps):JSX.Element => {
    
    const { cartItems,  clearCart } = useCart()

    const renderClearCartButton = (): JSX.Element => {

        if (cartItems.length > 0) {
            return (
                <Button color={"red"} className="w-full" onClick={() => clearCart()}>
                    Empty Cart
                </Button>
            )
        } else {
            return (
                <></>
            )
        }

    }

    const renderPlaceOrderButton = (): JSX.Element => {

        if (cartItems.length > 0) {
            return (
                <Button color={"default"} className="w-full" onClick={() => handlePlaceOrder()}>
                    Place Your Order
                </Button>
            )
        } else {
            return (
                <></>
            )
        }

    }

    return <>
        <div className="flex flex-col gap-3 shadow-md rounded-2xl p-5 m-5">
            <div className="grow">
                <Label htmlFor="displayName1" className="mb-3">Recipient</Label>
                <TextInput
                    value={displayName}
                    id="displayName1"
                    className="w-full"
                    disabled
                    readOnly />
            </div>
            <div className="grow">
                <Label htmlFor="deliveryAddress1" className="mb-3">Delivery Address</Label>
                <Textarea
                    value={deliveryAddress}
                    id="deliveryAddress1"
                    className="w-full"
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
            </div>
            <div className="grow">
                {renderPlaceOrderButton()}
            </div>
            <div className="grow">
                {renderClearCartButton()}
            </div>
        </div>
    </>

}

export default CartOrderAccountInformation;