"use client";
import { JSX, useState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import Divider from "../shared/Divider";
import { toast } from "react-toastify";
import { Account } from "@/schema/entity";
import Link from "next/link";

interface ProfileDetailProps {
    account: Account
}

const ProfileDetail = ({ account }: ProfileDetailProps): JSX.Element => {

    const [displayName, setDisplayName] =  useState(account.displayName);
    const [email, setEmail] = useState(account.email);
    const [registeredAddress, setRegisteredAddress] =  useState(account.registeredAddress);
    const router = useRouter();

    const updateStatus = async () => {

        if (displayName === "" 
            || displayName === "N/A" 
            || email === ""
            || displayName === "N/A") {
            
            return toast.warn("Display Name/ Address name required..", {
                theme: "light"
            })

        }

        const requestBody: object =  {
            displayName: displayName,
            email: email,
            registeredAddress: registeredAddress
        }

        const response = await fetch('/api/account/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (response.status == 200) {
            toast.success("Successfully update your profile")
            router.push("/profile");
        } else {
            toast.error("Failed update your profile")
        }

    }

    return (
        <div className="container max-w-xl mx-auto p-3">
            <Divider title="Your Profile" />
            <div className="flex flex-col gap-3 shadow-md rounded-2xl p-5">
                <div className="flex justify-between gap-3">

                    <div className="grow">
                        <Label htmlFor="username1" className="mb-3">Registered Username</Label>
                        <TextInput
                            value={account.username}
                            id="username1"
                            className="w-full"
                            disabled
                            readOnly />
                    </div>

                    <div className="grow">
                        <Label htmlFor="email1" className="mb-3">Registered Email</Label>
                        <TextInput
                            value={email}
                            id="email1"
                            className="w-full"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                </div>
                <div className="flex justify-between gap-3">
                    <div className="grow">
                        <Label htmlFor="displayName1" className="mb-3">Display Name</Label>
                        <TextInput
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            id="displayName1"
                            className="w-full"
                            />
                    </div>
                </div>
                <div className="gap-3">
                    <div>
                        <Label htmlFor="registeredAddress1" className="mb-3">Registered Address</Label>
                        <Textarea id="registeredAddress1" 
                            value={registeredAddress} 
                            onChange={(e) => setRegisteredAddress(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="gap-3">
                    <Button onClick={() => updateStatus()} className="w-full" color={"dark"}>Update Profile</Button>
                    <Button as={Link} href={"/updatepassword"} className="w-full mt-2" color={"dark"}>Update Password</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail;