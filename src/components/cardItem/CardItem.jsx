import styles from './cardItem.module.scss';

const CardItem = ({img, name, price}) => {
    return(
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={img} alt='pic'></img>
            </div>
            <p className={styles.name}>{name}</p>
            <div className={styles.price}>${price}</div>
        </div>
    )
}

export default CardItem;