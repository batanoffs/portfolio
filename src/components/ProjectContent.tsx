import { useMemo } from 'react'
import { Section } from '../utils/SectionRender'
import 'react-toastify/dist/ReactToastify.css'

interface ProjectContentProps {
    content: Array<{
        section: string
        items: Array<
            | string
            & {
                  subSection?: string
                  commands?: string[]
                  code?: string
                  details?: string
                  text?: string
                  checked?: boolean
              }
        >
    }>
    styles: string
}

export const ProjectContent = ({ content, styles }: ProjectContentProps) => {
    const renderedContent = useMemo(() => {
        return content.map(({ section, items }, index) => (
            <Section key={index} section={section} styles={styles} items={items} />
        ))
    }, [content, styles])

    return <>{renderedContent}</>
}
