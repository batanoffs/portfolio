import { toast } from 'react-toastify';

export const copyToClipboard = (text: string) => {
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
