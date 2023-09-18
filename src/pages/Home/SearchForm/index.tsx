export function SearchForm() {
    return (
        <div className="w-full mt-20">
            <header className="flex justify-between items-center mb-3 ">
                <span className="text-lg font-bold font-nunito text-base-subtitle">
                    Publicações
                </span>
                
                <span className="text-sm text-base-span font-nunito">
                    6 publicações
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