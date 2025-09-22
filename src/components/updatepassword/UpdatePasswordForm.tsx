"use client"

import { JSX, useState } from "react"
import Divider from "../shared/Divider";
import { Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

const UpdatePasswordForm = ():JSX.Element => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmitUpdatePassword = async () => {

        const requestBody: object = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        const res = await fetch('/api/account/updatepassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (res.ok) {
            // Show toast and wait for it to complete
            toast.success("Update password success !", {
                theme: "light",
                autoClose: 2000, // Auto close after 2 seconds
            });

            await new Promise(resolve => setTimeout(resolve, 2200));
            window.location.href = "/profile";
            return;
        } else {
            toast.error('Update password failed', {
                theme: "light"
            });
            return;
        }

    }
    
    return (<>
        <div className="container max-w-xl mx-auto p-3">
            <Divider title="Update Your Password" />
            <div className="flex flex-col gap-3 shadow-md rounded-2xl p-5">
                <div className="grow">
                    <Label htmlFor="oldPassword1" className="mb-3">Old Password</Label>
                    <TextInput
                        value={oldPassword}
                        id="oldPassword1"
                        type="password"
                        className="w-full"
                        onChange={(e) => setOldPassword(e.target.value)}
                        />
                </div>
                <div className="grow">
                    <Label htmlFor="newPassword1" className="mb-3">New Password</Label>
                    <TextInput
                        value={newPassword}
                        id="newPassword1"
                        type="password"
                        className="w-full"
                        onChange={(e) => setNewPassword(e.target.value)}
                        />
                    <p className="text-sm text-gray-500 mt-2">
                        Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
                    </p>       
                </div>
                
                <Button onClick={() => handleSubmitUpdatePassword()} className="w-full" color={"dark"}>Update</Button>    
            </div>
        </div>
    </>)
}

export default UpdatePasswordForm;