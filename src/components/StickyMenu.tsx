import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { SocialIcons } from './SocialIcons'

export const StickyMenu: FC = () => {
    return (
        <main className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <Link to="/">Daniel Batanov </Link>
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
                        <Link className="group flex items-center py-3 active" to="/#about">
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
                        </Link>
                    </li>
                    <li>
                        <Link className="group flex items-center py-3 active" to="/#experience">
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
                        </Link>
                    </li>
                    <li>
                        <Link className="group flex items-center py-3 active" to="/#projects">
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
                        </Link>
                    </li>
                </ul>
            </nav>
            <SocialIcons />
        </main>
    )
}
