



import React from 'react'
import { HeaderDisplayProps } from './@types'
import { AnimatePresence, motion } from 'framer-motion'
import { Fade } from '@/static/animations'



function HeaderDisplay({ isActive, text }: HeaderDisplayProps) {
    return (
        isActive && (
            <AnimatePresence>
                <motion.h1
                    key={`display-text`}
                    variants={Fade.In}
                    initial={"start"}
                    animate={"middle"}
                    exit={"end"}

                    className="_text font-bold">
                    {text}
                </motion.h1>
            </AnimatePresence>
        )
    )
}

export default HeaderDisplay