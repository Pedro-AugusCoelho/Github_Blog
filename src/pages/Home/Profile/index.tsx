import { ArrowSquareIn } from '@phosphor-icons/react'
import { ProfileIcon } from '../../../components/ProfileIcon'
import { LongCardInfo } from '../../../components/LongCardInfo'
import { useContext } from 'react'
import { BlogContext } from '../../../context/BlogContext'

export function Profile () {
    const { user } = useContext(BlogContext)

    const followers = user.followers === 1 ? `${user.followers} Seguidor` : `${user.followers} Seguidores`
    const bio = user.bio ? user.bio.length > 120 ? user.bio.substring(0, 120 - 3) + '...' : user.bio : ''

    return(
       <LongCardInfo>
            <div className="w-[100px] md:w-[144px]">
                <img
                    src={user.avatar_url}
                    alt="Image Profile Github"
                    className="w-[100px] md:w-[144px] rounded-lg"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 justify-end w-full">
                
                <div className='flex flex-col-reverse gap-2 md:gap-0 md:flex-row md:justify-between md:items-center'>
                    <span className='font-nunito font-bold text-xl md:text-2xl text-base-title'>
                        {user.name}
                    </span>
                    
                    <div className="border-b-2 border-[transparent] py-[1px] hover:border-blue">
                        <a href={user.html_url} target='_blank' className='flex items-center text-blue gap-1'>
                            <span className='font-bold'>GITHUB</span>
                            <ArrowSquareIn size={24} weight="fill" />
                        </a>
                    </div>
                </div>
                
                <div>
                    <div className='font-nunito text-base-text text-base text-justify'>
                        {bio}
                    </div>
                    
                    <footer className='mt-6 gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                        <ProfileIcon icon='github' title={user.login} />
                        { user.company && <ProfileIcon icon='company' title={user.company} />}
                        <ProfileIcon icon='followers' title={followers} />
                    </footer>
                </div>
            
            </div>
        </LongCardInfo>
    )
}