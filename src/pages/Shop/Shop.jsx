import TitleSection from '../../components/titleSection/TitleSection';
import ShopItemList from '../../components/shopItemList/ShopItemList';

import styles from './shop.module.scss';

const Shop = () => {
    return(
        <div className={styles.container}>
            <TitleSection title={'Магазин'}/>  
            <ShopItemList/>     
        </div>
    )
}

export default Shop;