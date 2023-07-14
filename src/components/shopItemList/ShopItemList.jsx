import { useState, useEffect } from 'react';
import useShopServices from '../../services/ShopServices';
import CardItem from '../cardItem/CardItem';

import styles from './shopItemList.module.scss';

const ShopItemList = () => {
    const [items, setItems] = useState([])
    const [offset, setOffset] = useState(1);
    const {getSomeProducts} = useShopServices();

    useEffect(() => {
        onRequest(offset);
    }, []);

    const onRequest = (offset) => {
        getSomeProducts(offset)
            .then(result => onProductsLoaded(result));
    }

    const onProductsLoaded = (data) => {
        // setItems(items => [...items, ...data]);
        setItems(data);
        setOffset(offset => offset + 9)
    }

    const content = items.map(item => {
        return(
            <CardItem 
                img={item.image}
                name={item.name}
                price={item.price}
                key={item.id}
            />
        )
    })

    return(
        <div className={styles.container}>
            <div className={styles.results}>
                <p>Показано: 9 из 12 товаров</p>
            </div>
            <ul className={styles.list}>
                {content}
            </ul>
            <div className={styles.buttons}>
                <button onClick={() => onRequest(offset)}></button>
            </div>
        </div>
    )
}

export default ShopItemList;