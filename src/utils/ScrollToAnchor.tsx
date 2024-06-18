import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
    const location = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // Extract the anchor ID from the hash
        }

        const scrollToElement = () => {
            if (lastHash.current) {
                const element = document.getElementById(lastHash.current);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    lastHash.current = ''; // Reset after scrolling
                }
            }
        };

        // Delay to ensure the element is rendered before scrolling
        const timeoutId = setTimeout(scrollToElement, 100);

        return () => clearTimeout(timeoutId); // Clean up the timeout on component unmount
    }, [location]);

    return null;
}
