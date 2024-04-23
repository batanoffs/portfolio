import type { FC } from 'react'
import { SocialIcons } from '../SocialIcons'

interface Props {
    styles?: string
}

export const StickyMenu: FC<Props> = ({ styles }) => {
    return (
        <div className={styles} >
            <h1 className="text-white text-xl mb-8">Daniel Batanov</h1>
            <h2 className="text-white text-lg mb-2">Junior Frontend Developer</h2>
            <span className="text-gray-blue text-base">
                I build responsive animated products and digital experiences for the web.
            </span>

            <SocialIcons />
        </div>
    )
}
