import { useState, useEffect } from "react"

export function useFetch(fetchFn, initialData) {
    const [fetchData, setFetchData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchData(places);
                setIsFetching(false);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch user places.' });
                setIsFetching(false);
            }
        }
        fetchPlaces();
    }, []);

    return {
        fetchData,
        isFetching,
        error,
        setFetchData,
    }
}
