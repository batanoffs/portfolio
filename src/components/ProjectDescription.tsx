
type ProjectDescription = {
    description: string[]
}

export const ProjectDescription = ({ description }: ProjectDescription) => {
    return (
        <>
            {description.map((line) => (
                <p key={line} className="text-sm text-slate-400">
                    {line}
                </p>
            ))}
        </>
    );
}