import { useContext } from "react"
import { BlogContext } from "../../../context/BlogContext"
import Z from 'zod'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = Z.object({
    query: Z.string(),
  })
  
type SearchFormInputs = Z.infer<typeof SearchFormSchema>

export function SearchForm() {
    const { postList, getIssuesOnGithub } = useContext(BlogContext)

    const { control, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema),
      })

    async function handleSearchWordFromGithubPost(data: SearchFormInputs) {
        await getIssuesOnGithub(data.query)
    }
    
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
            
            <Controller
                name="query"
                control={control}
                render={({ field }) => (
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    defaultValue=''
                    className="h-[50px] py-3 px-4 w-full rounded-lg bg-base-input text-base-label outline-0 border-[1px] border-base-labe focus:border-blue focus:text-base-text"
                    onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit(handleSearchWordFromGithubPost)();
                    }
                    }}
                    {...field}
                />
                )}
            />
        </div>
    )
}