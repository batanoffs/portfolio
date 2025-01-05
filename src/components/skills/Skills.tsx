/**
 * Skills component:
 *
 * Renders a list of buttons, each corresponding to
 * a specific type of skills, technologies or tools.
 * When a button is hovered or touched, a list of the
 * corresponding items is rendered animated.
 *
 * @component SkillButtons.ts
 * @returns {JSX.Element} A JSX element representing the SkillButtons component.
 */

import { useState } from 'react';
import { animationButton } from './styles';
import { SkillList } from './SkillList';

export const Skills = () => {
    // Initiate state for visibility for each skill category
    const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
        technologies: false,
        skills: false,
        tools: false,
    });

    // Define handler on mouse enter set visibility true
    const handleMouseEnter = (category: string) => {
        setVisibility((prev) => ({ ...prev, [category]: true }));
    };

    // Define handler on mouse leave set visibility to false
    const handleMouseLeave = (category: string) => {
        setVisibility((prev) => ({ ...prev, [category]: false }));
    };

    return (
        <div className="flex flex-col gap-6 overflow-hidden lg:min-h-[140px] md:max-h-[100px] min-h-[110px] max-h-[170px]">
            <div className="flex justify-start gap-4">
                {/* Map through visibility to render buttons since the events are the same*/}
                {Object.keys(visibility).map((key) => (
                    <button
                        key={key}
                        className={animationButton}
                        onMouseEnter={() => handleMouseEnter(key)}
                        onMouseLeave={() => handleMouseLeave(key)}
                        onTouchStart={() => handleMouseEnter(key)}
                        onTouchEnd={() => handleMouseLeave(key)}
                    >
                        {/* Modify the key element as title of the button with uppercase */}
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>

            {/* Map through each entry of visibility to check which one has been hovered and display it */}
            {Object.entries(visibility).map(
                ([key, value]) => value && <SkillList key={key} category={key} isVisible={value} />
            )}
        </div>
    );
};
