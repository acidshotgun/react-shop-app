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
                <ul className={styles.list}>
                    <NavLink className={styles.link} style={({isActive}) => ({color: isActive ? '#6E9C9F' : 'inherit'})} to="/">Главная</NavLink>
                    <NavLink className={styles.link} style={({isActive}) => ({color: isActive ? '#6E9C9F' : 'inherit'})} to="/shop">Магазин</NavLink>
                    <NavLink className={styles.link} style={({isActive}) => ({color: isActive ? '#6E9C9F' : 'inherit'})} to="/about">О бренде</NavLink>
                    <NavLink className={styles.link} style={({isActive}) => ({color: isActive ? '#6E9C9F' : 'inherit'})} to="/contacts">Контакты</NavLink>
                </ul>
                <div className={styles.phone}>
                    <img src={phone} alt='phone'></img>
                    <p>+7 (495) 823-54-12</p>
                </div>
                <img src={cart} alt="cart" />
            </div>
        </header>
    )
}

export default AppHeader;