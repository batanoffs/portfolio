/**
 * RenderAnimatedSkills
 *
 * Renders a list of skills, technologies or
 * tools animated. The list is rendered only when the
 * corresponding button is hovered or touched.
 *
 * @param {{ items: string[], backgroundColor: string, isVisible: boolean }} props
 * @returns {JSX.Element} A JSX element representing the list of skills, technologies or tools.
 */

export const RenderAnimatedSkills = ({
    items,
    backgroundColor,
    isVisible,
}: {
    items: string[];
    backgroundColor: string;
    isVisible: boolean;
}) => (
    <div
        className={`flex flex-wrap gap-1 animate-writing whitespace-nowrap
                    lg:mr-12 md:mr-12 ${isVisible ? 'flex' : 'hidden'}`}
    >
        {items.map((item) => (
            <span
                className={`inline-block whitespace-nowrap rounded-full px-2 py-1 text-xs
                    font-medium leading-5 text-slate-200 ${backgroundColor}`}
                key={item}
            >
                {item}
            </span>
        ))}
    </div>
);
