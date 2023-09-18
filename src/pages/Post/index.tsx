import { ArrowSquareIn, CaretLeft } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { LongCardInfo } from "../../components/LongCardInfo";
import { ProfileIcon } from "../../components/ProfileIcon";

import { useNavigate } from 'react-router-dom';

export function Post() {
    const navigation = useNavigate();

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
                                {/* TROCAR O LINK PARA LEVAR DIRETO AO POST */}
                                <a href="https://github.com/" target='_blank' className='flex items-center text-blue gap-1'>
                                    <span className='font-bold'>VER NO GITHUB</span>
                                    <ArrowSquareIn size={24} weight="fill" />
                                </a>
                            </div>
                        </header>

                        <div className="w-full font-nunito text-2xl text-base-title mt-5">
                            JavaScript data types and data structures
                        </div>

                        <footer className='mt-5 flex gap-6'>
                            <ProfileIcon icon='github' title='Pedro-AugusCoelho' />
                            <ProfileIcon icon='date' title='Há um dia' />
                            <ProfileIcon icon='comment' title='32 comentários' />
                        </footer>
                    </div>
                </LongCardInfo>
            </div>
        </div>
    )
}