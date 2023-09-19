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

interface BlogContextType {
    user: UserGithub
}

export const BlogContext = createContext({} as BlogContextType)

interface blogContextProviderProps {
    children: ReactNode
}


export function BlogContextProvider({children}:blogContextProviderProps) {

    const [ user, setUser ] = useState({} as UserGithub)

    async function handleGetUserOnGithub () {
        const response = await api.get('users/Pedro-AugusCoelho')

        if (response.status === 200) {
            setUser(response.data)
        }
    }

    useEffect(() => {
        handleGetUserOnGithub()
    },[])

    return (
        <BlogContext.Provider value={ { user } }>
            {children}
        </BlogContext.Provider>
    )
}

