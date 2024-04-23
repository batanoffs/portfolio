import type { FC } from 'react'

interface Props {
    className?: string
}

export const SocialIcons: FC<Props> = (props = {}) => {
    return (
        <div className="">
            <i className=""></i>
            <i className=""></i>
            <i className=""></i>
        </div>
    )
}