import HeaderMenu from '../headerMenu/HeaderMenu';

import styles from './appHeader.module.scss';
import phone from '../../resources/icons/call.png';
import cart from '../../resources/icons/cart.png';

const AppHeader = () => {
    return(
        <header>
            <div className={styles.container}>
                <HeaderMenu/>
                <div className={styles.phone}>
                    <img src={phone} alt='phone'></img>
                    <p>+7 (495) 823-54-12</p>
                </div>
                <div className={styles.cart}>
                    <img src={cart} alt="cart" />
                </div>
            </div>
        </header>
    )
}

export default AppHeader;