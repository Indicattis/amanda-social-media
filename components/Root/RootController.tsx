
"use client"


import { IconCaretUpFilled } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../utils/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

function RootController() {
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
        <AnimatePresence>
            <motion.div 
            key={`root-controller`}
            animate={{x: isScrolled ? 0 : 500}}
            transition={{
                type: "spring",
                damping: 15
            }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-5 _text shadow-lg shadow-palette_dark">
                <Button.Wide rounded="sm" variant="alfa_color" wide="xl"  onClick={() => scrollToTop()}>
                    <Button.Icon icon={<IconCaretUpFilled />} />
                </Button.Wide>
            </motion.div>
        </AnimatePresence>
  )
}

export default RootController