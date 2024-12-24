/**
 * copyToClipboard
 * 
 * Utility function that copies the given text to the clipboard.
 * 
 * @function copyToClipboard.tsx
 * @param {string} text The text to copy to the clipboard.
 * @returns {void}
 */

import { toast } from 'react-toastify';

export const copyToClipboard = (text: string) => {

    // Copy text to clipboard
    navigator.clipboard.writeText(text).then(
        () => {
            // Using a notification library like 'react-toastify' for better UX
            toast.success('Code copied to clipboard!');
        },
        (err) => {
            // Handle error case
            toast.error('Failed to copy code', err);
        }
    );
};
