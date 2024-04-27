import { FC } from 'react'
import line from '../components/assets/line.svg'
import data from '../data.json'

type Props = {
    styles?: string
}

export const MainContent: FC<Props> = ({ styles }) => {
    return (
        <div className={styles}>
            <div id="about" className="mb-80">
                <p className="text-text-blue text-base mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard
                    <span className="text-white text-base"> dummy </span>
                    text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p className="text-text-blue text-base">
                    It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like
                    <span className="text-white text-base"> Aldus PageMaker </span>including
                    versions of Lorem Ipsum.
                </p>
            </div>
            <section id="experience">
                <ul>
                    {data.work.map((work) => (
                        <li
                            key={work.id}
                            className="flex mb-20 border-solid border-1 border-text-blue
                            hover:border-solid hover:border hover:border-text-blue hover:rounded-md
                            hover:bg-hover-blue"
                        >
                            <div className="flex-shrink-0 w-[200px]">
                                <p className="text-text-blue text-base">{work.date}</p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-base">
                                    {work.position}{' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg>
                                </h2>
                                <h3 className="text-text-blue text-base mb-6">{work.company}</h3>
                                <p className="text-text-blue text-base">{work.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section id="projects">
                <ul>
                    {data.projects.map((project) => (
                        <li className="flex mb-20 hover:border-solid hover:border hover:border-text-blue hover:rounded-xl">
                            <div className="flex-shrink-0 w-[250px]">
                                <img
                                    src={project.image}
                                    className="w-[200px] overflow-hidden aspect-auto"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-base">{project.title}</h2>
                                <p className="text-text-blue text-base ">{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
