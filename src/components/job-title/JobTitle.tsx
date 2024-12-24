/**
 * JobTitle component
 *
 * Displays the job title with animated rotating text effects.
 * It utilizes the useEffect hook to manage the animation lifecycle.
 *
 * @component JobTitle.tsx
 * @returns {JSX.Element} A JSX element representing the SkillButtons component.
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './rotate-text.css';

export const JobTitle = () => {

    // Initiate on component first render
    useEffect(() => {
        
        // Select all elements with the class 'word'
        const words = document.querySelectorAll('.word');

        // Split each word into letters and wrap them with span elements
        words.forEach((word) => {
            const letters = word.textContent!.split('');
            word.textContent = '';
            letters.forEach((letter) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.className = 'letter';
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        const maxWordIndex = words.length - 1;
        (words[currentWordIndex] as HTMLElement).style.opacity = '1';

        // Rotates the text by transitioning letters out and in.
        const rotateText = () => {
            const currentWord = words[currentWordIndex];
            const nextWord =
                currentWordIndex === maxWordIndex
                    ? words[0]
                    : (words[currentWordIndex + 1]);

            // Transition current word out
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = 'letter out';
                }, i * 80);
            });

            (nextWord as HTMLElement).style.opacity = '1';

            // Transition next word in
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = 'letter behind';
                setTimeout(() => {
                    letter.className = 'letter in';
                }, 340 + i * 80);
            });

            // Update current word index
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        // Start the initial rotation and set interval for continuous rotation
        rotateText();
        const interval = setInterval(rotateText, 4000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Returns component jsx
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link to="/">Daniel Batanov</Link>
            </h1>
            <div className="rotating-text ml-20 mt-3 inline-flex gap-[136px]">
                <p>
                    <span className="word text-yellow-300">JavaScript</span>
                    <span className="word text-sky-500 ">TypeScript</span>
                    <span className="word text-purple-500">React JS</span>
                    <span className="word text-green-400">Node JS</span>
                    <span className="word text-teal-400">Full-stack</span>
                    <span className="word text-orange-400">Front-end</span>
                </p>
                <p>Developer</p>
            </div>
            <p className="mt-4 max-w-xs leading-normal">
                I build responsive animated products and digital experiences for the web.
            </p>
        </div>
    );
};
