"use client";
import { JSX, useState } from "react";
import Divider from "../shared/Divider";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Link from "next/link";
import { toast } from "react-toastify";

const RegisterForm = ():JSX.Element => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [registeredAddress, setRegisteredAddress] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        
        const requestBody: object = {
            username: username,
            displayName: fullName,
            email: email,
            loginPassword: password,
            registeredAddress: registeredAddress
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (res.ok) {
            
            toast.success("Register Success", {
                theme: "light"
            })

            window.location.href = "/login";
        
        } else {
            
            toast.error("Register Failed", {
                theme: "light"
            })

            setEmail("");
            setPassword("");
            setUsername("");
            setRegisteredAddress("");
            setFullName("");
        }

    }

    return (
        <>
            <div className="container max-w-5xl mx-auto p-3">
                <Divider title="Register today and get maximum deals!" />
                <div className="shadow-md rounded-2xl max-w-xl mx-auto p-3">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="email1" className="mb-3">Registered Email</Label>
                            <TextInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                id="email1" 
                                className="w-full" 
                                type="email" 
                                placeholder="jeremiah@terraloom.com" 
                                required/>
                        </div>
                        <div>
                            <Label htmlFor="username1" className="mb-3">Username</Label>
                            <TextInput
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                id="username1" 
                                className="w-full" 
                                type="text" 
                                placeholder="jeremiahjhon" 
                                required/>
                        </div>
                        <div>
                            <Label htmlFor="fullname1" className="mb-3">Full Name (Display Name)</Label>
                            <TextInput
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} 
                                id="fullname1" 
                                className="w-full" 
                                type="text" 
                                placeholder="Jeremiah Johnson 2" 
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
                            <p className="text-sm text-gray-500 mt-2">
                                Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
                            </p>   
                        </div>
                        <div>
                            <Label htmlFor="registeredAddress1" className="mb-3">Registered Adddress</Label>
                            <Textarea
                                value={registeredAddress}
                                onChange={(e) => setRegisteredAddress(e.target.value)} 
                                id="registeredAddress1" 
                                className="w-full" 
                                placeholder="Your adrress for shipping!" 
                                required/>
                        </div>
                        <Button type="submit" color={"light"} className="w-full">Register</Button>
                        <Button as={Link} color={"dark"} href="/login" className="w-full"> Already have an account ? Login</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;