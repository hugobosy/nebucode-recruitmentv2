import { useState, useEffect } from 'react';

function useCache<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        const cacheValue = localStorage.getItem(key);
        if (cacheValue) {
            return JSON.parse(cacheValue) as T;
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useCache;