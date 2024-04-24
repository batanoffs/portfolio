import { FC } from 'react'

type Props = {
    styles?: string
}

export const MainContent: FC<Props> = ({ styles }) => {
    return (
        <div id="about" className={styles}>
            <div className="mb-80">
                <p className="text-gray-blue text-base mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard
                    <span className="text-white text-base"> dummy </span>
                    text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p className="text-gray-blue text-base">
                    It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like
                    <span className="text-white text-base"> Aldus PageMaker </span>including
                    versions of Lorem Ipsum.
                </p>
            </div>
            <div className="flex">
                <div className="flex-shrink-0 w-[150px]">
                    <p className="text-gray-blue text-base">2022 - 2024</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-white text-base">Architect - IPA</h2>
                    <h3 className="text-gray-blue text-base mb-6 ">BIM architect</h3>
                    <p className="text-gray-blue text-base ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloremque
                        enim ducimus quidem culpa molestiae ipsa pariatur maiores adipisci nisi
                        illum atque reprehenderit, nihil natus deserunt non, quia amet quod!
                    </p>
                </div>
            </div>
        </div>
    )
}
