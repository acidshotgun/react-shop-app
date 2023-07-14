import {useHttp} from '../hooks/http.hook';

const useShopServices = () => {
    const {request, loading, error} = useHttp();

    const _apiBase = 'https://api.escuelajs.co/api/v1/'; // Первая часть api
    const _baseOffset = 1;

    const getProduct = async () => {
        const res = await request(`${_apiBase}products?limit=3&offset=${_baseOffset}`);
        return res.map(item => _transorfProducts(item))
    }

    const getSomeProducts = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}products?limit=9&offset=${offset}`);
        return res.map(_transorfProducts)
    }

    const _transorfProducts = (products) => {
        return {
            id: products.id,
            name: products.title,
            image: products.images[0],
            price: products.price,
            description: products.description,
        }
    }

    return {getProduct, getSomeProducts, loading, error};
}

export default useShopServices;