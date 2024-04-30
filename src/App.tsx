import type { FC } from 'react'
import { StickyMenu } from './components/StickyMenu'
import { MainContent } from './components/MainContent'
import './index.css'

interface Props {}

interface StickyMenu {
    styles?: string
}

interface MainContent {
    styles?: string
}

export const App: FC<Props> = () => {
    // TODO
    // const captureMouseCoordinates: MouseEventHandler<HTMLDivElement> = (e) => {
    //     const x = e.clientX
    //     const y = e.clientY
    //     const coord = `x: ${x}, y: ${y}`
    //     console.log(coord)
    // }
    return (
        <div className="group/spotlight relative">
            <div
                // onMouseMove={captureMouseCoordinates}
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute h-dvh"
            ></div>

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <a
                    className="absolute left-0 top-0 block -translate-x-full
                        rounded bg-gradient-to-br from-teal-400 via-blue-500
                        to-purple-600 px-4 py-3 text-sm font-bold uppercase
                        tracking-widest text-white focus-visible:translate-x-0"
                    href="#content"
                >
                    Skip to Content
                </a>
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <StickyMenu
                        styles={
                            'lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'
                        }
                    />
                    <MainContent styles={'pt-24 lg:w-1/2 lg:py-24'} />
                </div>
            </div>
        </div>
    )
}
