/**
 * About
 *
 * This component renders a section about the author and
 * can be toggled between three different states.
 *
 * @component About.tsx
 * @param {string} styles - The tailwind class styles for this section
 * @returns {JSX.Element} - A JSX element representing the About component.
 */

import { MouseEvent, useState } from 'react';
import { Summary } from '../summary/Summary';
import { Popover } from './PopOver';

export const About = ({ styles }: { styles: string }) => {
    
    // This state holds the name of the plant
    const [name, setName] = useState('small');

    // This handler updates the state of the component by changing the name and the image of the plant.
    const updateSummary = (event: MouseEvent<HTMLButtonElement>) => {

        // Get the name and the image of the plant
        const buttonLabel = event.currentTarget.ariaLabel;
        const plantImage = event.currentTarget.children[0].children[1];

        // Declare and define variables
        let newName = '';
        let newImageSrc = '';

        // Update the name and the image of the plant based on the button label
        switch (buttonLabel) {
            case 'small':
                newName = 'long';
                newImageSrc = './plant-stage-2.svg';
                break;
            case 'long':
                newName = 'full';
                newImageSrc = './plant-stage-3.svg';
                break;
            case 'full':
                newName = 'small';
                newImageSrc = './plant-stage-1.svg';
                break;
            default:
                break;
        }

        // Check if there is new name or image
        if (newName && newImageSrc) {

            // Set new name
            setName(newName);
            
            // Get the 'src' attribute from the plant image
            const srcAttribute = plantImage.attributes.getNamedItem('src');

            // Check if the attribute exists
            if (srcAttribute) {
                // Set the new image source
                srcAttribute.value = newImageSrc;
            }
        }
    };

    // Returns the JSX
    return (
        <section id="about" className={styles} aria-label="About me">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                        lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2
                    className="text-sm font-bold uppercase tracking-widest
                         text-slate-200 lg:sr-only"
                >
                    About
                </h2>
            </div>
            <Summary className={'mb-auto z-10'} name={name} />
            <div className="z-1 mt-auto self-center rounded-full">
                <button
                    className="relative inline-flex items-center rounded-full animate-pulse duration-300
                    hover:bg-slate-500 hover:cursor-waterCan hover:animate-watering
                    text-xs justify-center p-2 font-medium leading-5 text-teal-300"
                    onClick={(event) => updateSummary(event as MouseEvent<HTMLButtonElement>)}
                    aria-label={name}
                >
                    <Popover trigger="hover" content={<p>Water me!</p>}>
                        <img
                            className="rounded-full border-0"
                            height="100"
                            width="100"
                            src="./plant-stage-1.svg"
                            alt="plant"
                        />
                    </Popover>
                </button>
            </div>
        </section>
    );
};
