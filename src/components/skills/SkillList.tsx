/**
 * SkillList
 *
 * Renders a list of skills, technologies or
 * tools animated. The list is rendered only when the
 * corresponding button is hovered or touched.
 *
 * @param {{ category: string, isVisible: boolean }} props
 * @returns {JSX.Element} A JSX element representing the list of skills, technologies or tools.
 */

import { skillsList, technologies, toolsList } from './data';

// Define the type for the configuration object
type ConfigType = {
    [key: string]: {
        items: string[];
        backgroundColor: string;
    };
};

// Define the configuration for each skill category like the items and the background color
const config: ConfigType = {
    techs: {
        items: technologies,
        backgroundColor: 'bg-cyan-400/30',
    },
    skills: {
        items: skillsList,
        backgroundColor: 'bg-teal-700/40',
    },
    tools: {
        items: toolsList,
        backgroundColor: 'bg-purple-800/30',
    },
};

const SkillItem = ({ item, backgroundColor }: { item: string; backgroundColor: string }) => (
    <span
        className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs
                    font-medium leading-5 text-slate-200 ${backgroundColor}`}
        key={item}
    >
        {item}
    </span>
);

export const SkillList = ({ category, isVisible }: { category: string; isVisible: boolean }) => {
    const { items, backgroundColor } = config[category] || { items: [], backgroundColor: '' };

    return (
        <div
            className={`flex flex-wrap gap-2 whitespace-nowrap animate-writing  ${
                isVisible ? 'flex' : 'hidden'
            }`}
        >
            {items.map((item) => (
                <SkillItem key={item} item={item} backgroundColor={backgroundColor} />
            ))}
        </div>
    );
};
