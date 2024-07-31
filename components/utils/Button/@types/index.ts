import { HTMLAttributes } from "react";

export interface ButtonWideProps extends HTMLAttributes<HTMLButtonElement> {
    wide: "sm" | "lg" | "md" | "xl" | "full",
    rounded: "sm" | "lg" | "md" | "xl" | "full",
    variant: "alfa_color" | "beta_color" | "text_color" | "contrast_text" | "contrast_color_1" | "contrast_color_2" | "contrast_color_3"| "contrast_color_4" | "background_color" | "background_aux",
}


export interface ButtonTextProps {
    text: string
}



export interface ButtonIconProps {
    icon: React.ReactNode
}