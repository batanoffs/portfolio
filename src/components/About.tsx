import { Summary } from './Summary'
import { useState } from 'react'

import ReactPopover from '../assets/PopOver'

export const About = () => {
    const [name, setName] = useState('')

    const updateSummary = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonName = event.currentTarget.ariaLabel
        const plant = event.currentTarget.children[0]

        setName(buttonName ?? '')
        buttonName === 'small'
            ? (event.currentTarget.ariaLabel = 'long') &&
              (plant.attributes.getNamedItem('src').value = './plant-stage-2.svg')
            : buttonName === 'long'
            ? (event.currentTarget.ariaLabel = 'full') &&
              (plant.attributes.getNamedItem('src').value = './plant-stage-3.svg')
            : buttonName === 'full'
            ? (event.currentTarget.ariaLabel = 'small') &&
              (plant.attributes.getNamedItem('src').value = './plant-stage-1.svg')
            : null
    }

    return (
        <section
            id="about"
            className="flex flex-col justify-between mb-16 scroll-mt-16 h-[auto] md:mb-24
                    lg:mb-36 lg:h-[500px] lg:scroll-mt-24"
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
            <Summary
                className={'mb-auto transition delay-150 duration-300 ease-in-out'}
                name={name}
            />
            <div className="mt-auto self-center">
                <ReactPopover
                    trigger="hover"
                    content={<p>Water me!</p>}
                >
                    <button
                        className="relative inline-flex items-center rounded-full
                    hover:bg-slate-500 hover:cursor-waterCan hover:animate-watering
                    text-xs justify-center p-2 font-medium leading-5 text-teal-300"
                        onClick={(event) =>
                            updateSummary(event as React.MouseEvent<HTMLButtonElement>)
                        }
                        aria-label="small"
                    >
                        <img
                            className=""
                            height="100"
                            width="100"
                            src="./plant-stage-1.svg"
                            alt="plant"
                        />
                    </button>
                </ReactPopover>
            </div>
        </section>
    )
}
