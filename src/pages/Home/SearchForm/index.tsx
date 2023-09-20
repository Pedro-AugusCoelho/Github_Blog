import { useContext } from "react"
import { BlogContext } from "../../../context/BlogContext"

export function SearchForm() {
    const { postList } = useContext(BlogContext)
    return (
        <div className="w-full mt-20">
            <header className="flex justify-between items-center mb-3 ">
                <span className="text-lg font-bold font-nunito text-base-subtitle">
                    Publicações
                </span>
                
                <span className="text-sm text-base-span font-nunito">
                    {postList.total_count === 1 && <>{postList.total_count} publicação</>}
                    {postList.total_count > 1 && <>{postList.total_count} Publicações</>}
                </span>
            </header>
            
            <input
                type="text"
                placeholder="Buscar conteúdo"
                className="h-[50px] py-3 px-4 w-full rounded-lg bg-base-input text-base-label outline-0 border-[1px] border-base-labe focus:border-blue focus:text-base-text"
            />
        </div>
    )
}