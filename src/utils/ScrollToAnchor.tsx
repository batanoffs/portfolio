/**
 * ScrollToAnchor
 *
 * This component listens for changes in the URL hash and smoothly scrolls to the
 * corresponding anchor element on the page. It uses a ref to store the last known
 * hash and a timeout to ensure the element is rendered before scrolling.
 *
 * @returns {null} This component does not render anything to the DOM.
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {

    // Get the current location object from react-router
    const location = useLocation(); 

    // Ref to store the last hash value
    const lastHash = useRef(''); 

    useEffect(() => {

        // Get the hash value from the URL
        if (location.hash) {

            // Extract the anchor ID from the hash
            lastHash.current = location.hash.slice(1);
        }

        // Function to scroll to the anchor element
        const scrollToElement = () => {

            // Check if there is a last hash value
            if (lastHash.current) {

                // Scroll to the anchor element
                const element = document.getElementById(lastHash.current);
                
                // Check if the element exists
                if (element) {

                    // Scroll to the element
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });

                    // Reset the hash reference after scrolling
                    lastHash.current = '';
                }
            }
        };

        // Delay to ensure the element is rendered before scrolling
        const timeoutId = setTimeout(scrollToElement, 100);

        // Clean up the timeout on component unmount
        return () => clearTimeout(timeoutId);

    }, [location]);

    // This component does not render any JSX
    return null;
};
