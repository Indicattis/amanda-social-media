import { motion } from "framer-motion"
import { getColorRGB } from "@/functions/color"
import { ButtonWideProps } from "./@types"





export default function ButtonWide ( { wide, rounded, variant = "alfa_color", ...rest}: ButtonWideProps) {
    return (
        <motion.div
        whileTap={{scale: .98}}
        animate={{
            background: getColorRGB(variant)
        }}
        >
            <button
            {...rest} 
            className={`
                flex justify-center items-center gap-1
                py-2
                ${wide == "sm" ? "h-8 _text _small" : ""}
                ${wide == "md" ? "h-12 !px-3 _text _small" : ""}
                ${wide == "lg" ? "h-14 !px-4  _text " : ""}
                ${wide == "xl" ? "h-16 !px-5  _display_text" : ""}
                ${wide == "full" ? "h-20 w-20 _display_text " : ""}
                ${rounded == "sm" ? "rounded-[3px]" : ""}
                ${rounded == "md" ? "rounded-md" : ""}
                ${rounded == "lg" ? "rounded-lg" : ""}
                ${rounded == "full" ? "rounded-full" : ""}
                `}>
                
            </button>
        </motion.div>
    )
}