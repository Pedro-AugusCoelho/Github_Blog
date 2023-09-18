import CoverImg from '../../assets/Cover.svg'

export function Header () {
    return (
        <header className='w-full'>
            <img
                alt=''
                src={CoverImg}
                className='w-full'
            />
        </header>
    )
}