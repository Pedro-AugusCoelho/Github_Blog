import { ReactNode } from "react"

interface LongCardInfoProps {
    children: ReactNode
}

export function LongCardInfo ({children}:LongCardInfoProps) {
    return (
        <div className="w-full bg-base-profile shadow-sm rounded-lg py-8 px-10 -mt-8 md:-mt-24 gap-8 flex flex-col items-center md:flex-row md:items-end">
            {children}
        </div>
    )
}