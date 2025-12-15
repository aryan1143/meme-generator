import axios from "axios";
import { useEffect, useState } from "react";


export default function AICaption () {
    const [caption, setCaption] = useState({text1: '', text2: ''});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
                setCaption({text1: response.data.setup, text2: response.data.punchline})
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetch();
    }, []);

    return (
        {
            caption: caption,
            error: error,
            isLoading: isLoading
        }
    )
}