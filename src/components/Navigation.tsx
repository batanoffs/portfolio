// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import NavItems from '../nav.json';

export const Navigation = () => {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {NavItems.map((item) => (
                    <li key={item.id}>
                        <NavLink className="group flex items-center py-3 active" to={item.href}>
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
                        </NavLink>
                        {/* <NavLink
                            className={({ isActive }) =>
                                `group flex items-center py-3 ${
                                    isActive ? 'text-teal-300' : ''
                                }`
                            }
                            to={item.href}
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all 
                                            group-hover:w-16 group-hover:bg-slate-200 
                                            ${isActive ? 'w-16 bg-teal-300' : ''} 
                                            motion-reduce:transition-none`}
                                    ></span>
                                    <span
                                        className={`nav-text text-xs font-bold uppercase tracking-widest 
                                            text-slate-500 group-hover:text-slate-200 
                                            ${isActive ? 'text-teal-300' : ''}`}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            )}
                        </NavLink> */}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
