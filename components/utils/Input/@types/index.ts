import { InputHTMLAttributes, ReactNode } from "react"


export interface InputRootProps {
    children: ReactNode
}

export interface InputElementProps  extends InputHTMLAttributes<HTMLInputElement>{
    placehoder: string
    disabled?: boolean
    value?: string
}

export interface InputIconProps {
    icon: ReactNode
}