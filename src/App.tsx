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
            <StickyMenu styles={'flex-col flex-0 shrink-0 w-246 sticky pt-28 pl-24'}/>
            <MainContent styles={'flex-col pt-28 pl-64 pr-24'}/>
        </div>
    )
}
