import { JSX } from "react";

interface DividerProps {
    title: string
}


const Divider = ({ title }: DividerProps): JSX.Element => {

    return (
    <h2 className="my-3 text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight text-balance text-center">
        {title}
    </h2>
    )
}

export default Divider;