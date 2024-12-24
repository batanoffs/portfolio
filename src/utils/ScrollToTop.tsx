/**
 * ScrollToTop component
 *
 * This component renders a button that becomes visible when the user scrolls
 * down the page. Clicking the button smoothly scrolls the page back to the top.
 * It also removes the hash from the URL after scrolling to the top.
 *
 * @component ScrollToTop.tsx
 * @returns {JSX.Element|null} A button element or null if not visible.
 */

import { useEffect, useState } from 'react';

export const ScrollToTop = () => {

    // Define state for the visibility of the scroll button
    const [isVisible, setIsVisible] = useState(false);

    // This function updates the visibility state of the scroll button based on the current scroll position.
    const handleScroll = () => {
        setIsVisible(window.scrollY > 400);
    };

    // Set up the scroll event listener on component mount and clean up on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {

        // Initiate scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Remove the hash from the URL
        window.location.hash = '';
    };

    // Define classes for the scroll button and its icon
    const scrollButtonClasses =
        'fixed bottom-8 right-8 hover:bg-teal-400/10 shadow rounded-full bg-slate-700 text-white font-bold py-0 px-4 lg:px-6 lg:py-2 md:px-6 md:py-2  hover:opacity-75';
    const scrollButtonIconClasses =
        'h-14 w-6 lg:h-12 md:h-12 transition-duration-300 hover:h-7 hover:teal-400 svg:hover:text-teal-400';

    // Conditionally render the scroll button based on its visibility state
    return (
        isVisible && (
            <button onClick={scrollToTop} className={scrollButtonClasses}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="scroll-to-top-svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className={scrollButtonIconClasses}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        )
    );
};

