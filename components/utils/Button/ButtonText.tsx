import { ButtonTextProps } from "./@types";




export default function ButtonText ({text}: ButtonTextProps) {
    return (
        <p className="font-bold">{text}</p>
    )
}