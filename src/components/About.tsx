import { Summary } from './Summary'
import { useState } from 'react'

export const About = () => {
    const [name, setName] = useState('')

    const updateSummary = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonName = event.currentTarget.ariaLabel
        setName(buttonName ?? '')
    }
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 h-[300px] md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                         lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2
                    className="text-sm font-bold uppercase tracking-widest
                         text-slate-200 lg:sr-only"
                >
                    About
                </h2>
            </div>
            <Summary name={name} />
            <div className="relative flex gap-4 justify-center">
                <button
                    className="hover:cursor-water flex items-center 
                        px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                    onClick={(event) => updateSummary(event as React.MouseEvent<HTMLButtonElement>)}
                    aria-label="small"
                >
                    <img width="20" height="20" src="./plant.svg" alt="plant" />
                </button>
                <button
                    className="hover:cursor-water flex items-center 
                        px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                    onClick={(event) => updateSummary(event as React.MouseEvent<HTMLButtonElement>)}
                    aria-label="long"
                >
                    <img width="30" height="30" src="./plant.svg" alt="plant" />
                </button>
                <button
                    className="hover:cursor-water flex items-center  px-3 py-1
                 text-xs font-medium leading-5 text-teal-300"
                    onClick={(event) => updateSummary(event as React.MouseEvent<HTMLButtonElement>)}
                    aria-label="full"
                >
                    <img width="40" height="40" src="./plant.svg" alt="plant" />
                </button>
            </div>
        </section>
    )
}
