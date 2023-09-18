import { NavLink } from "react-router-dom";

interface CardProps {
    title: string
    date: string
    resume: string
}

export function Card({title, date, resume}:CardProps) {

    const resumeFormatted = resume.slice(0, 130) + '...';
    const id = 1

    return (
        <NavLink to={`/post/${id}`} title="post">
            <div className="max-h-64 p-8 bg-base-post shadow-sm rounded-lg cursor-pointer border-[transparent] border-2 hover:border-base-label">
                <header className="flex justify-between items-start mb-5">
                    <div className="text-base-title font-bold text-xl font-nunito">
                        {title}
                    </div>
                    
                    <div className="font-nunito text-base-span text-xs">
                        {date}
                    </div>
                </header>

                <div className="font-nunito text-base text-base-text text-justify">
                    {resumeFormatted}
                </div>
            </div>
        </NavLink>
    )
}