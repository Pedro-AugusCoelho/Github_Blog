import { ReactNode } from "react"

interface LongCardInfoProps {
    children: ReactNode
}

export function LongCardInfo ({children}:LongCardInfoProps) {
    return (
        <div className="w-full bg-base-profile shadow-sm rounded-lg py-8 px-10 -mt-24 flex gap-8">
            {children}
        </div>
    )
}