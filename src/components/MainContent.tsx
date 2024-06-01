import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Certificates } from './Certificates'

interface MainContentProps {
    data: {
        work: Array<{
            id: string
            date: string
            position: string[]
            company: string
            website: string
            description: string[]
            skills: Array<{
                id: string
                name: string
            }>
        }>
        projects: Array<{
            id: string
            label: string
            title: string
            description: string
            image: string
            href: string
            readme: string
            video: string
            links: {
                live?: string
                github?: string
                npm?: string
            }
            badges: {
                type: string
                link: string
            }[]
            tags: {
                id: string
                name: string
            }[]
        }>
        certificates: Array<{
            name: string
            date: string
            img: string
            link: string
        }>
    }
}

export const MainContent = ({ data }: MainContentProps) => {
    return (
        <>
            <About
                styles="flex flex-col justify-between mb-16 scroll-mt-16
                h-[auto] md:mb-24 md:h-[500px] lg:mb-26 lg:h-[500px] lg:scroll-mt-24"
            />
            <Experience
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                experience={data.work}
            />
            <Projects
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                projects={data.projects}
            />
            <Certificates
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                certificates={data.certificates}
            />
        </>
    )
}
