import { Github, Globe, Instagram, Twitter, X } from "lucide-react";
import { JSX } from "react";

const Footer = ():JSX.Element => {

    return (
        <>
            <footer className="shadow-md mt-10 bg-gray-800 text-white">
                <div className="container max-w-5xl mx-auto p-3 flex justify-center">
                    <div className="flex flex-col">
                        <div className="mt-5">
                            <p className="text text-center font-semibold">This site is only an example  no actual product being marketed</p>
                        </div>
                        <div className="mt-5">
                            <p className="text text-center font-semibold">Developed by Jeremiah Hasudungan</p>
                        </div>
                        <div className="flex justify-between my-10">
                            <a href="https://www.instagram.com/jeredungan/">
                                <Instagram />
                            </a>
                            <a href="https://x.com/JHasudungan">
                                <Twitter />
                            </a>
                            <a href="https://github.com/jhasudungan">
                                <Github />
                            </a>
                            <a href="/">
                                <Globe />
                            </a>
                        </div>
                        <div>
                            <p className="text text-center font-bold">&copy; Terraloom - 2025</p>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </>
    );

}

export default Footer;