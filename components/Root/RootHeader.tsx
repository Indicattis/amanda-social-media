"use client";

import { useState, useRef, useEffect } from "react";
import { scroller } from "react-scroll";

export default function RootHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [pathArray, setPathArray] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const newArray = window.location.pathname.substring(1).split('/');
            setPathArray(newArray);
        }
    }, []);


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

    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };


    return (
        <></>
    );
}

