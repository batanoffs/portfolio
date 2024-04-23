import { FC } from 'react'

type Props = {
    styles?: string
}

export const MainContent: FC<Props> = ({ styles }) => {
    return (
        <div className={styles}>
            <p className="text-gray-blue text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
                <span className="text-white text-base"> dummy </span>
                text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-blue text-base">
                t was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like
                <span className="text-white text-base"> Aldus PageMaker </span>including versions of
                Lorem Ipsum.
            </p>
        </div>
    )
}
