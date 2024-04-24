import type { FC } from 'react'
import { StickyMenu } from './components/StickyMenu'
import { MainContent } from './components/MainContent'
import "./index.css"

interface Props {
}

interface StickyMenu {
    styles?: string
}

interface MainContent {
    styles?: string
}

export const App: FC<Props> = () => {
    return (
        <div className={`h-dvh`}>
            <StickyMenu styles={'flex flex-col justify-between h-dvh flex-none max-w-lg fixed pt-28 pl-28'}/>
            <MainContent styles={'w-[1000px] absolute right-0 flex right-20 flex-col pt-28 pl-80 pr-32'}/>
        </div>
    )
}

// fixed top-0 w-full bg-white shadow-lg flex flex-col justify-between flex-none max-w-lg z-[100]