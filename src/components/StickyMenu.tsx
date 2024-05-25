import { Link } from 'react-router-dom'
import { SocialIcons } from './SocialIcons'

const NavItems = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Certificates', href: '/#certificates' },
]

export const StickyMenu = () => {
    return (
        <main className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <Link to="/">Daniel Batanov </Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Junior
                    <div>
                        <ul className="">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Frontend</li>
                        </ul>
                    </div>
                    Frontend Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build responsive animated products and digital experiences for the web.
                </p>
            </div>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    {NavItems.map((item) => (
                        <li>
                            <Link className="group flex items-center py-3 active" to={item.href}>
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
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <SocialIcons />
        </main>
    )
}
