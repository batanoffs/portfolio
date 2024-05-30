import { CodeSnippet } from './CodeSnippetRender'
import { CommandList } from './ComandListRender'

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

export const ItemRenderer = ({ item }: ItemRendererProps): React.ReactNode => {
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
