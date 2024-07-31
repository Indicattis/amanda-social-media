import { InputHTMLAttributes } from "react"
import { InputElementProps } from "./@types"


export function InputBoxNumber({ placehoder, disabled, value, ...rest}: InputElementProps) {
    return (
        <input 
        {...rest}
        className="h-full _text w-full outline-none bg-purple px-3  overflow-hidden relative"
        placeholder={placehoder}
        disabled={disabled}
        value={value}
        />
    )
}