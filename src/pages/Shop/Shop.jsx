import Subtitle from "../../components/subtitle/Subtitle";

import styles from './shop.module.scss';

const Shop = () => {
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Subtitle text={'Магазин'}/>
                <div className={styles.path}>
                    <span>Главная</span>
                    <span>-</span>
                    <span>Магазин</span>
                </div>
            </div>
        </div>
    )
}

export default Shop;