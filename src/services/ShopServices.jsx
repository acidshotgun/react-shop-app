import {useHttp} from '../hooks/http.hook';

const useShopServices = () => {
    const {request, loading, error} = useHttp();

    const _apiBase = 'https://api.escuelajs.co/api/v1/products?limit=3&offset=1';

    const getProduct = async () => {
        const res = await request(_apiBase);
        return res.map(item => _transorfProducts(item))
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

    return {getProduct, loading, error};
}

export default useShopServices;