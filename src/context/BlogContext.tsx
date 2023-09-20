import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../util/axios";

interface UserGithub {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: null | string,
    blog: string,
    location: string,
    email: null | string,
    hireable: null | string,
    bio: string,
    twitter_username: null | string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

interface Items {
    id: number
    number: number
    title: string
    created_at: string
    updated_at: string
    body: string
    score: number
}

interface PostList {
    total_count: number
    items: Items[]
}

interface BlogContextType {
    user: UserGithub;
    postList: PostList;
    getIssuesOnGithub: (search?: string) => Promise<void>;
}

export const BlogContext = createContext({} as BlogContextType)

interface blogContextProviderProps {
    children: ReactNode
}


export function BlogContextProvider({children}:blogContextProviderProps) {

    const [ user, setUser ] = useState({} as UserGithub)
    const [ postList, setPostList ] = useState({} as PostList)

    async function getUserOnGithub () {
        const response = await api.get('users/Pedro-AugusCoelho')

        if (response.status === 200) {
            setUser(response.data)
        }
    }

    async function getIssuesOnGithub (search?:string) {
        const response = await api.get('search/issues', {
            params: {
                q: search ? `${search} repo:Pedro-AugusCoelho/Github_Blog&per_page=10&page=1&sort=created&order=desc` : 'repo:Pedro-AugusCoelho/Github_Blog&per_page=10&page=1&sort=created&order=desc',
            }
        })

        if (response.status === 200) {
            setPostList(response.data)
        }
    }

    useEffect(() => {
        getUserOnGithub()
        if (user) {
            getIssuesOnGithub()
        }  
    },[])

    return (
        <BlogContext.Provider value={ { user, postList, getIssuesOnGithub } }>
            {children}
        </BlogContext.Provider>
    )
}

