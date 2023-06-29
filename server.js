import axios from "axios";

const tranform = (items) => {
    return {
        name: items.name,
    }
}

const testAxios = async () => {
    try {
        const request = await axios.get('https://api.kinopoisk.dev/v1.3/movie?page=3&limit=10', {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '0N0GKXP-4PH41E8-Q3SS6R0-7A2XP6P',
            },
        })

        return request.data.docs.map(item => tranform(item));
    } catch (error) {
        console.log(error)
    }
}

export default testAxios;
