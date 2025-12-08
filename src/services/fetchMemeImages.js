import axios from 'axios';
import { useEffect, useState } from 'react';

export default function fetchMemeImages() {
    const [images, setImages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.imgflip.com/get_memes");
                setImages(response.data.data.memes);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        {
            isLoading: isLoading,
            error: error,
            images: images
        }
    )
}