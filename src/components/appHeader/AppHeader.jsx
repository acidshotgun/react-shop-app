import {Link, NavLink} from 'react-router-dom'

import styles from './appHeader.module.scss';
import logo from '../../resources/logo.png';
import phone from '../../resources/icons/call.png';
import cart from '../../resources/icons/cart.png';

const AppHeader = () => {
    return(
        <header>
            <div className={styles.container}>
               <Link to="/" className={styles.logo}>
                    <img src={logo} alt='logo'></img>
                </Link>
                <div className={styles.list}>
                    <NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/">Главная</NavLink>
                    <NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/shop">Магазин</NavLink>
                    <NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/about">О бренде</NavLink>
                    <NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/contacts">Контакты</NavLink>
                </div>
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