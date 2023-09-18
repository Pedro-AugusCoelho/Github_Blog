import { Buildings, CalendarBlank, ChatDots, GithubLogo, Users } from "@phosphor-icons/react"

interface ProfileIcon {
    icon: 'github' | 'company' | 'followers' | 'date' | 'comment'
    title: string
}

export function ProfileIcon ({ icon, title }: ProfileIcon) {
    return (
        <div className="flex gap-2 items-center">
            {icon === 'github'      && <GithubLogo size={18} weight="fill" color="#3A536B" />   }
            {icon === 'company'     && <Buildings size={18} weight="fill" color="#3A536B" />    }
            {icon === 'followers'   && <Users size={18} weight="fill" color="#3A536B" />        }

            {icon === 'date'   && <CalendarBlank  size={18} weight="fill" color="#3A536B" />    }
            {icon === 'comment'   && <ChatDots  size={18} weight="fill" color="#3A536B" />      }
            <span className="text-base-subtitle">
                {title}
            </span>
        </div>
    )
}