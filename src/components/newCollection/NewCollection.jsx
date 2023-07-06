import { useState, useEffect } from 'react';
import useShopServices from '../../services/ShopServices';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import Subtitle from '../subtitle/Subtitle';
import CardItem from '../cardItem/CardItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import styles from './newCollection.module.scss';

const NewCollection = () => {
    const [items, setItems] = useState([]);
    const {getProduct, loading, error} = useShopServices();

    useEffect(() => {
        request()
    }, [])

    const request = () => {
        getProduct()
            .then(result => onProductsLoaded(result))
    }

    const onProductsLoaded = (data) => {
        setItems(data);
        renderItems(items)
    }

    const renderItems = (items) => {
        const readyData = items.map((item, i) => {
            return <CardItem key={i} name={item.name} img={item.image} price={item.price}/>
        })

        return readyData;
    }

    const content = renderItems(items);
    const loadingSpinner = loading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null;

    return(
        <div className={styles.container}>
            <Subtitle text='Новая коллекция'/>
            <div className={styles.cards}>
                {content}
                {loadingSpinner}
                {errorMessage}
            </div>
            <Link to='/shop'>
                <Button text={'Открыть магазин'}/>
            </Link>
        </div>
    )
}

export default NewCollection;