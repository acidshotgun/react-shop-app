import {Link, NavLink} from 'react-router-dom'
import logo from '../../resources/logo.png';
import styles from './headerMenu.module.scss';

const HeaderMenu = () => {
    return(
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt='logo'></img>
            </Link>
            <ul>
                <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/">Главная</NavLink></li>
                <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/shop">Магазин</NavLink></li>
                <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/about">О бренде</NavLink></li>
                <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/contacts">Контакты</NavLink></li>
            </ul>
        </div>
    )
}

export default HeaderMenu;