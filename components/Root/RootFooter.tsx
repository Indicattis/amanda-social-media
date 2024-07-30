"use client"

import Image from "next/image";
import { Button } from "../utils/Button";
import { IconBrandGithub, IconBrandLinkedin, IconCaretUpFilled, IconHelp } from "@tabler/icons-react";
import { Layout } from "../Layouts";
import { Modal } from "../utils/Modal";
import { useState } from "react";
import { Images } from "@/static/imgs";
import { scroller } from "react-scroll";

export default function RootFooter() {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>("");

    const handleModalContent = (content: string) => {
        setModalContent(content);
        setModalActive(true);
    };

    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };

    return (
        <footer className="">
        </footer>
    );
}
