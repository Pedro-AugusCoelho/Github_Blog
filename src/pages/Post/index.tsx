import { ArrowSquareIn, CaretLeft } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { LongCardInfo } from "../../components/LongCardInfo";
import { ProfileIcon } from "../../components/ProfileIcon";
import { BlogContext } from "../../context/BlogContext";

import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

import ReactMarkdown from "react-markdown";

export function Post() {
    const navigation = useNavigate();

    const { user, post, getIssueOnGithub } = useContext(BlogContext);

    const { id } = useParams();

    function handleGetIssueOnGithub() {
        if (id) {
            getIssueOnGithub(id)
        }
    }

    useEffect(() => {
        handleGetIssueOnGithub()
    },[id]);

    // AJUSTANDO A DATA
    const datePostCreated = post.created_at ? new Date(post.created_at) : null;
    const daysOfDifference = datePostCreated ? formatDistanceToNow(new Date(datePostCreated),{
        addSuffix: true,
      }) : '';

    // AJUSTANDO A QUANTIDADE DE COMENTARIOS
    const amountComment = post.comments ? post.comments === 1 ? `${post.comments} Comentário`  : `${post.comments} Comentários` : '0 Comentários'

    const handleBackPage = () => {
        navigation(-1); // Volta para a página anterior
    };

    return (
        <div className="bg-base-background flex flex-col min-h-screen">
            <Header />
            
            <div className="flex-1 w-1/2 m-auto">
                <LongCardInfo>
                    <div className="w-full">
                        <header className="flex justify-between items-center text-blue font-nunito text-xs font-bold w-full">
                            <div className="flex items-center gap-1 cursor-pointer" onClick={handleBackPage}>
                                <CaretLeft size={24} weight="fill" />
                                VOLTAR
                            </div>

                            <div className="border-b-2 border-[transparent] py-[1px] hover:border-blue">
                                <a href={post.html_url} target='_blank' className='flex items-center text-blue gap-1'>
                                    <span className='font-bold'>VER NO GITHUB</span>
                                    <ArrowSquareIn size={24} weight="fill" />
                                </a>
                            </div>
                        </header>

                        <div className="w-full font-nunito text-2xl text-base-title mt-5">
                            {post.title}
                        </div>

                        <footer className='mt-5 flex gap-6'>
                            <ProfileIcon icon='github' title={user.login} />
                            <ProfileIcon icon='date' title={daysOfDifference} />
                            <ProfileIcon icon='comment' title={amountComment} />
                        </footer>
                    </div>
                </LongCardInfo>

                
                <ReactMarkdown 
                    className="text-base-text text-justify my-10 px-8" 
                    children={post.body}
                />
                
            </div>
        </div>
    )
}