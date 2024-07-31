"use client";

import { useState, useEffect } from "react";
import { Header } from "./Header";

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
        <Header.Root>
            <Header.Display isActive text=""/>
            <Header.Navbar/>
            <Header.Links/>
        </Header.Root>
    );
}

