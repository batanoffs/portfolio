interface CommandListProps {
    commands: string[]
}

export const CommandList = ({ commands }: CommandListProps): React.ReactNode => (
    <ul className="list-disc pl-4 mb-2">
        {commands.map((command) => (
            <li key={command}>{command}</li>
        ))}
    </ul>
)
