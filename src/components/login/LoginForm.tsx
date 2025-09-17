"use client";
import { JSX, useState } from "react";
import Divider from "../shared/Divider";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { toast } from "react-toastify";

const LoginForm = ():JSX.Element => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        
        const requestBody: object = {
            username: username,
            password: password
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (res.ok) {
            // Show toast and wait for it to complete
            toast.success("Login Success ! Happy Shopping", {
                theme: "light",
                autoClose: 2000, // Auto close after 2 seconds
            });

            await new Promise(resolve => setTimeout(resolve, 2200));
            window.location.href = "/shop";
            return;
        } else {
            toast.error('Login failed', {
                theme: "light"
            });
            return;
        }

    }

    return (
        <>
            <div className="container max-w-5xl mx-auto p-3">
                <Divider title="Login To Your Account" />
                <div className="shadow-md rounded-2xl max-w-xl mx-auto p-3">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="username1" className="mb-3">Username</Label>
                            <TextInput
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                id="username1" 
                                className="w-full" 
                                type="text" 
                                placeholder="johndoe" 
                                required/>
                        </div>
                        <div>
                            <Label htmlFor="password1" >Password</Label>
                            <TextInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                id="password1" 
                                type="password"  
                                className="w-full" 
                                required/>
                        </div>
                        <Button type="submit" color={"light"} className="w-full">Login</Button>
                        <Button as={Link} color={"dark"} href="/register" className="w-full">Register</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;