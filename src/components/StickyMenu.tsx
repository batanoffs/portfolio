import type { FC } from 'react'
import { SocialIcons } from '../SocialIcons'

interface Props {
    styles?: string
}

interface SocialIcons {
    styles?: string
}

export const StickyMenu: FC<Props> = ({ styles }) => {
    return (
        <div className={styles}>
            <div className="">
                <h1 className="text-white text-xl mb-8">Daniel Batanov</h1>
                <h2 className="text-white text-lg mb-2">Junior Frontend Developer</h2>
                <span className="text-gray-blue text-base">
                    I build responsive animated products and digital experiences for the web.
                </span>
            </div>
            <ul className="text-gray-blue  text-small list-image-none uppercase flex flex-col gap-8">
                <li className="hover:list-image-line">
                    <a className='hover:text-cyan-500' href="#about">About</a>
                </li>
                <li>
                    <a className='hover:text-cyan-500' href="#experience">Experience</a>
                </li>
                <li>
                    <a className='hover:text-cyan-500' href="#projects">Projects</a>
                </li>
            </ul>
            <SocialIcons styles={'flex gap-6 w-auto mb-24'} />
        </div>
    )
}
