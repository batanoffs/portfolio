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
        <div className={`bg-blue flex h-dvh`}>
            <StickyMenu styles={'flex flex-col justify-between flex-none max-w-lg sticky pt-28 pl-28'}/>
            <MainContent styles={'flex-col pt-28 pl-80 pr-32'}/>
        </div>
    )
}
