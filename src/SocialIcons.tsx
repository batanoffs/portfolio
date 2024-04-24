import type { FC } from 'react'

interface Props {
    styles?: string
}

export const SocialIcons: FC<Props> = ( {styles} ) => {
    return (
        <div className={styles}>
            <a href="">
                <img src="./components/assets/github.svg" alt="" className="w-6" />
            </a>
            <a href="">
                <img src="./components/assets/instagram.svg" alt="" className="w-6" />
            </a>
            <a href="">
                <img src="./components/assets/linkedin.svg" alt="" className="w-6" />
            </a>
        </div>
    )
}
