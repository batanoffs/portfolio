// src/hooks/useFetchReadme.ts
import { useState, useEffect } from 'react';

interface FetchReadmeResult {
    data: string;
    loading: boolean;
    error: Error | null;
}

export const useFetchReadme = (url: string): FetchReadmeResult => {
    const [data, setData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchReadme = async () => {
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
        };

        fetchReadme();
    }, [url]);

    return { data, loading, error };
};
