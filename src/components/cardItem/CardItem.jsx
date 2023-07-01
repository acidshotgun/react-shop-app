import styles from './cardItem.module.scss';

const CardItem = ({image, name, price}) => {
    return(
        <div className={styles.item}>
            <div className={styles.image}></div>
            <div className={styles.name}></div>
            <div className={styles.price}></div>
        </div>
    )
}

export default CardItem;