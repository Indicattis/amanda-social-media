import { HTMLAttributes } from "react";

export interface HeaderDisplayProps {
    text: string,
    isActive: boolean
}

export interface HeaderElements extends HTMLAttributes<HTMLDivElement>{}