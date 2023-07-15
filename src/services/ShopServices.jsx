import {useHttp} from '../hooks/http.hook';

const useShopServices = () => {
    const {request, loading, error} = useHttp();

    const _apiBase = 'https://api.escuelajs.co/api/v1/'; // Первая часть api
    const _baseOffset = 1;

    //offset - отступ, limit - кол-во результатов (можно подстроить везде где есть запрос на товары)
    const getProduct = async (offset = _baseOffset, limit) => {
        const res = await request(`${_apiBase}products?limit=${limit}&offset=${offset}`);
        return res.map(item => _transformProducts(item))
    }

    // Запрос по категориям
    const getCategories = async (offset = _baseOffset, idCategories) => {
        const res = await request(`${_apiBase}categories/${idCategories}/products?limit=9&offset=${offset}`);
        return res.map(_transformProducts);
    }

    const _transformProducts = (products) => {
        return {
            id: products.id,
            name: products.title,
            image: products.images[0],
            price: products.price,
            description: products.description,
        }
    }

    return {getProduct, getCategories, loading, error};
}

export default useShopServices;