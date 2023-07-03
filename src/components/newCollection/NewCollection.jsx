import { useState, useEffect } from 'react';
import useShopServices from '../../services/ShopServices';
import { Link } from 'react-router-dom';

import Subtitle from '../subtitle/Subtitle';
import CardItem from '../cardItem/CardItem';
import Spinner from '../spinner/Spinner';

import styles from './newCollection.module.scss';

const NewCollection = () => {
    const [items, setItems] = useState([]);
    const {getProducts, loading} = useShopServices();

    useEffect(() => {
        request()
    }, [])

    const request = () => {
        getProducts()
            .then(result => onProductsLoaded(result))
    }

    const onProductsLoaded = (data) => {
        setItems(data)
    }

    const loadedProducts = items.map((item, i) => {
        return (
            <CardItem key={i} name={item.name} img={item.image} price={item.price}/>
        )
    })

    return(
        <div className={styles.container}>
            <Subtitle text='Новая коллекция'/>
            <div className={styles.cards}>
                {!loading ? loadedProducts : <Spinner/>}
            </div>
            <Link to='/shop'>
                <button>Открыть магазин</button>
            </Link>
        </div>
    )
}

export default NewCollection;