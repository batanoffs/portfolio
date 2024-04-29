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
        <main className={styles}>
            <div className="">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="#/">Daniel Batanov </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Junior Frontend Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build responsive animated products and digital experiences for the web.
                </p>
            </div>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    <li>
                        <a className="group flex items-center py-3 active" href="#about">
                            <span
                                className="nav-indicator mr-4 h-px w-8 bg-slate-600
                                transition-all group-hover:w-16 group-hover:bg-slate-200
                                group-disabled:group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                motion-reduce:transition-none"
                            ></span>
                            <span
                                className="nav-text text-xs font-bold uppercase tracking-widest
                             text-slate-500 group-hover:text-slate-200
                              group-focus-visible:text-slate-200"
                            >
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3 active" href="#experience">
                            <span
                                className="nav-indicator mr-4 h-px w-8 bg-slate-600
                                transition-all group-hover:w-16 group-hover:bg-slate-200
                                group-disabled:group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                motion-reduce:transition-none"
                            ></span>
                            <span
                                className="nav-text text-xs font-bold uppercase tracking-widest
                             text-slate-500 group-hover:text-slate-200
                              group-focus-visible:text-slate-200"
                            >
                                Experience
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3 active" href="#projects">
                            <span
                                className="nav-indicator mr-4 h-px w-8 bg-slate-600
                                transition-all group-hover:w-16 group-hover:bg-slate-200
                                group-disabled:group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                motion-reduce:transition-none"
                            ></span>
                            <span
                                className="nav-text text-xs font-bold uppercase
                                tracking-widest text-slate-500 group-hover:text-slate-200
                              group-focus-visible:text-slate-200"
                            >
                                Projects
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <SocialIcons styles={'ml-1 mt-8 flex items-center'} />
        </main>
    )
}
