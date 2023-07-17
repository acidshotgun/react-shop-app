import { useState, useEffect } from 'react';
import useShopServices from '../../services/ShopServices';
import CardItem from '../cardItem/CardItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import styles from './shopItemList.module.scss';

const ShopItemList = () => {
    const [items, setItems] = useState([])
    const [offset, setOffset] = useState(1);
    const [itemsNumber, setItemsNumber] = useState(9);
    const [buttons, setButtons] = useState([
        {name: 'All', id: 1, active: true},
        {name: 'Clothes', id: 2, active: false},
        {name: 'Shoes', id: 3, active: false},
        {name: 'Electronics', id: 4, active: false},
        {name: 'Others', id: 5, active: false}
    ]);
    const {getProduct, getCategories, loading, error} = useShopServices();

    useEffect(() => {
        onRequest(offset);
    }, []);

    const onRequest = (offset,) => {
        if (buttons[0].active === true) {
            getProduct(offset, itemsNumber)
            .then(result => onProductsLoaded(result));
        } 
        // Ориг
        // getProduct(offset, itemsNumber)
        // .then(result => onProductsLoaded(result));  
    }

    const onProductsLoaded = (data) => {
        setItems(items => [...items, ...data]);
        // setItems(data);
        setOffset(offset => offset + 9)
    }

    const renderItems = (items) =>{
        const readyData = items.map(item => {
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
            <ul className={styles.list}>
                {readyData}
            </ul>
        );
    }

    // Метод перебирает массив с объектами кнопок
    // Срабатывает по клику с id аргументом (это id кнопки)
    // Когда перебор доходит до нажатого айтема то срабатывает условие и меняется активность на true
    // Все остальные кнопки возвращаются в стейт с активностью false
    const changeActive = (id) => {
        setButtons(buttons => buttons.map(item => {
            if (item.id === id) {
                return {...item, active: true}
            }

            return {...item, active: false}
        }))
    }

    // Рендер кнопок
    const buttonsList = buttons.map(item => {
        const className = item.active ? styles.buttonActive : styles.button;

        return(
            <button 
                    key={item.id} 
                    className={className}
                    onClick={() => changeActive(item.id)}
                >{item.name}
            </button>
        )
    }) 

    const content = renderItems(items)
    const spinner = loading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null;

    return(
        <div className={styles.container}>
            <div className={styles.buttons}>
                {buttonsList}
            </div>
            <div className={styles.results}>
                <p>Показано: 9 из 12 товаров</p>
            </div>
            {errorMessage}
            {spinner}
            {content}
            <div className={styles.results}>
                <p>Показано: 9 из 12 товаров</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => onRequest(offset)}> Загрузить еще</button>
            </div>
        </div>
    )
}

export default ShopItemList;