import { useState } from "react";
import axios from "axios";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)

    const request = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);

            if(!response) {
                throw new Error(`Could not fetch ${url}, status ${response.status}`);
            }

            setLoading(false);
            return response.data;
            
        } catch (error) {
            throw(error);
        }
    }

    return {request, loading};
}

