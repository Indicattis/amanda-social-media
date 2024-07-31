"use client";

import { useState, useEffect } from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";

export default function RootHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

   

    return (
        <Header.Root className="fixed left-0 w-full flex justify-center pt-5">
            <Header.Body isScrolled={isScrolled}>
                <div className="flex z-10 w-full items-center justify-between px-5">
                    <div className="flex items-center">
                        <Header.Logo/>
                        <Header.Display isActive={true} text="Amanda Moura"/>
                    </div>
                    <Header.Navbar/>
                    <Header.Links/>
                </div>
                    <motion.div 
                    animate={{
                        height: isScrolled ? 80 : 56,
                        borderRadius: "0px 50px 0px 50px",
                        opacity: isScrolled ? 1 : 0
                    }}
                    className={`absolute z-0 top-0 left-0 w-full max-w-[1080px] bg-[#a1a1a12c] p-3  backdrop-blur-sm`}></motion.div>
            </Header.Body>
        </Header.Root>
    );
}

