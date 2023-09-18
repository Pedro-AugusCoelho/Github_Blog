import { ArrowSquareIn } from '@phosphor-icons/react'
import { ProfileIcon } from '../../../components/ProfileIcon'
import { LongCardInfo } from '../../../components/LongCardInfo'

export function Profile () {
    return(
       <LongCardInfo>
            <div className="w-[144px]">
                <img
                    src="https://github.com/Pedro-AugusCoelho.png"
                    alt="Image Profile"
                    className="w-[144px] rounded-lg"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 justify-end">
                
                <div className='flex justify-between items-center'>
                    <span className='font-nunito font-bold text-2xl text-base-title'>
                        Pedro A. Coelho Costa
                    </span>
                    
                    <div className="border-b-2 border-[transparent] py-[1px] hover:border-blue">
                        <a href="https://github.com/" target='_blank' className='flex items-center text-blue gap-1'>
                            <span className='font-bold'>GITHUB</span>
                            <ArrowSquareIn size={24} weight="fill" />
                        </a>
                    </div>
                </div>
                
                <div>
                    <div className='font-nunito text-base-text text-base text-justify'>
                        Tristique volutpat pulvinar vel massa,
                        pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
                        Nunc, volutpat pulvinar vel mass.
                    </div>
                    
                    <footer className='mt-6 flex gap-6'>
                        <ProfileIcon icon='github' title='Pedro-AugusCoelho' />
                        <ProfileIcon icon='company' title='Rocketseat' />
                        <ProfileIcon icon='followers' title='32 seguidores' />
                    </footer>
                </div>
            
            </div>
        </LongCardInfo>
    )
}