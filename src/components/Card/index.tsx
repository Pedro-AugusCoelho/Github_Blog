import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';

interface CardProps {
    title: string
    date: string
    resume: string
}

export function Card({title, date, resume}:CardProps) {

    const resumeFormatted = resume.slice(0, 130) + '...';
    const id = 1

    // AJUSTANDO A DATA
    const datePostCreated = new Date(date);
    const daysOfDifference = formatDistanceToNow(new Date(datePostCreated),{
        addSuffix: true,
      });

    return (
        <NavLink to={`/post/${id}`} title="post">
            <div className="p-8 gap-2 bg-base-post shadow-sm rounded-lg cursor-pointer border-[transparent] border-2 hover:border-base-label">
                <header className="flex justify-between items-start mb-5 gap-2">
                    <div className="text-base-title font-bold text-xl font-nunito flex-1">
                        {title}
                    </div>
                    
                    <div className="font-nunito text-base-span text-xs">
                        {daysOfDifference}
                    </div>
                </header>

                <div className="font-nunito text-base text-base-text text-justify">
                    {resumeFormatted}
                </div>
            </div>
        </NavLink>
    )
}