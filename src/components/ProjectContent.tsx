import React, { useMemo } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProjectContentProps {
    content: Array<{
        section: string
        items: Array<
            | string
            | {
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

interface SectionProps {
    section: string
    styles: string
    items: Array<
        | string
        | {
              subSection?: string
              commands?: string[]
              code?: string
              details?: string
              text?: string
              checked?: boolean
          }
    >
}

interface ItemRendererProps {
    item:
        | string
        | {
              subSection?: string
              commands?: string[]
              code?: string
              details?: string
              text?: string
              checked?: boolean
          }
}

interface CodeSnippetProps {
    code: string
}

interface CommandListProps {
    commands: string[]
}

export const ProjectContent = ({ content, styles }: ProjectContentProps) => {
    const renderedContent = useMemo(() => {
        return content.map(({ section, items }, index) => (
            <Section key={index} section={section} styles={styles} items={items} />
        ))
    }, [content, styles])

    return <>{renderedContent}</>
}

const Section = ({ section, items, styles }: SectionProps) => (
    <section id={section} className={styles}>
        <h2 className="text-xl font-bold mb-4">{section}</h2>
        <ul className={`${section === 'Future updates' ? 'list-none' : ''}`}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`${
                        section === 'Future updates'
                            ? 'flex items-center justify-start'
                            : 'mt-2 text-sm leading-normal'
                    }`}
                >
                    {section === 'Future updates' && (
                        <input type="checkbox" className="mr-4" checked={item.checked} readOnly />
                    )}
                    <ItemRenderer item={item} />
                </li>
            ))}
        </ul>
    </section>
)

const ItemRenderer = ({ item }: ItemRendererProps): React.ReactNode => {
    if (typeof item === 'string') {
        return <p>{item}</p>
    } else {
        return (
            <div className="mb-0">
                {item.subSection && (
                    <strong className="inline-block text-xs uppercase mb-1">
                        {item.subSection}
                    </strong>
                )}
                {item.details && <p className=" text-sm leading-normal">{item.details}</p>}
                {item.text && <p className=" text-sm leading-normal">{item.text}</p>}
                {item.commands && <CommandList commands={item.commands} />}
                {item.code && <CodeSnippet code={item.code} />}
            </div>
        )
    }
}

const CommandList = ({ commands }: CommandListProps): React.ReactNode => (
    <ul className="list-disc pl-4 mb-2">
        {commands.map((command) => (
            <li key={command}>{command}</li>
        ))}
    </ul>
)

const CodeSnippet = ({ code }: CodeSnippetProps): React.ReactNode => (
    <div className="relative bg-zinc-950 p-4 rounded-md mb-2">
        <pre className="whitespace-pre-line">
            <code>{code}</code>
        </pre>
        <button
            onClick={() => copyToClipboard(code)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-200 p-1"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
            </svg>
        </button>
    </div>
)

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
        () => {
            // Using a notification library like 'react-toastify' for better UX
            toast.success('Code copied to clipboard!')
        },
        (err) => {
            // Handle error case
            toast.error('Failed to copy code', err)
        }
    )
}
