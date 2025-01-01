/**
 * SkillButtons component:
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
import { skillsList, technologies, toolsList } from './data';
import { RenderAnimatedSkills } from './renderAnimatedSkills';

export const SkillButtons = () => {
    // Initiate state for visibility with 3 items and set default state false
    const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
        techs: false,
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
        <div className="flex flex-col lg:flex-row md:flex-row gap-2 lg:max-h-[98px] md:max-h-[98px] min-h-[100px] max-h-[130px] overflow-hidden">
            <div className="flex flex-row md:flex-col lg:flex-col gap-2">
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
                ([key, value]) =>
                    value && (
                        <RenderAnimatedSkills
                            key={key}
                            items={
                                key === 'techs'
                                    ? technologies
                                    : key === 'skills'
                                    ? skillsList
                                    : toolsList
                            }
                            backgroundColor={
                                key === 'techs'
                                    ? 'bg-cyan-400/30'
                                    : key === 'skills'
                                    ? 'bg-teal-700/40'
                                    : 'bg-purple-800/30'
                            }
                            isVisible={value}
                        />
                    )
            )}
        </div>
    );
};
