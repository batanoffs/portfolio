/**
 * useFetchReadme
 * Hook to fetch a README file from a given URL and return the content as an
 * Object.
 *
 * @hook useFetchReadme.tsx
 * @param {string} url - The URL of the README file.
 * @returns {FetchReadmeResult} The result of the hook.
 */

import { useState, useEffect, useCallback } from 'react';
import { FetchReadmeResult } from './fetchReadMe.interface';

export const useFetchReadme = (url: string): FetchReadmeResult => {

    // Define state for the data fetched from the URL. Initially empty string.
    const [data, setData] = useState<string>('');

    // Define state for the loading state of the hook. Initially true.
    const [loading, setLoading] = useState<boolean>(true);

    // Define state for the error state of the hook. Initially null.
    const [error, setError] = useState<Error | null>(null);

    // Function with call back to fetch the README file from the given URL.
    const fetchReadme = useCallback(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            setData(text);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    // useEffect hook to load the result when the component mounts and if changes occur in future fetching.
    useEffect(() => {
        fetchReadme();
    }, [fetchReadme]);

    // Return the result of the hook.
    return { data, loading, error };
};
