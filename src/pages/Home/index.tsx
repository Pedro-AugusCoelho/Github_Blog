import { Header } from "../../components/Header";
import { ListPosts } from "./ListPosts";
import { Profile } from "./Profile";
import { SearchForm } from "./SearchForm";

export function Home(){
    return(
        <div className="bg-base-background flex flex-col min-h-screen">
            <Header />
            
            <div className="flex-1 w-4/5 xl:w-1/2 m-auto">
                <Profile />
                <SearchForm />
                <ListPosts />
            </div>
        </div>
    )
}