import { ItemRenderer } from "./ItemRender"

interface SectionProps {
    section: string
    styles: string
    items: Array<{
        subSection?: string
        commands?: string[]
        code?: string
        details?: string
        text?: string
        checked?: boolean
    }>
}

export const Section = ({ section, items, styles }: SectionProps) => (
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
                        <div
                            className={`w-4 h-4 mr-4 border border-slate-600 bg-transparent flex items-center justify-center rounded-sm`}
                        >
                            {item.checked && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </div>
                    )}
                    <ItemRenderer item={item} />
                </li>
            ))}
        </ul>
    </section>
)
