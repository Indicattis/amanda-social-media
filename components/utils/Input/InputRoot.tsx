import { motion } from "framer-motion"
import { InputRootProps } from "./@types"


export function InputRoot ( { children }: InputRootProps) {
    return (
        <motion.div 
        className={``}>
            {children}
        </motion.div>
    )
}