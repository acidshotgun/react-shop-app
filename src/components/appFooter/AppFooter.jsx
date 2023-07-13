import HeaderMenu from '../headerMenu/HeaderMenu';
import { NavLink } from 'react-router-dom';

import styles from './appFooter.module.scss';
import instagram from '../../resources/icons/instagram.png';
import facebook from '../../resources/icons/facebook.png';
import twitter from '../../resources/icons/twitter.png';
import payments from '../../resources/icons/visa-mastercard.png';

const AppFooter = () => {
    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.header}>
                    <HeaderMenu/>
                    <div className={styles.contacts}>
                        <p className={styles.phone}>+7 (495) 823-54-12</p>
                    </div>
                </div>

                <div className={styles.email}>
                    <p className={styles.email}>hello@womazing.com</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.rights}>
                        <p>© Все права защищены</p>
                        <a href='#'>Политика конфиденциальности</a>
                        <a href='#'>Публичная оферта</a>
                    </div>
                    <ul>
                        <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/">Главная</NavLink></li>
                        <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/shop">Магазин</NavLink></li>
                        <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/about">О бренде</NavLink></li>
                        <li><NavLink className={({isActive}) => (isActive ? styles.linkActive : styles.link)} to="/contacts">Контакты</NavLink></li>
                    </ul>

                    
                    <div className={styles.socials}>
                        <div className={styles.links}>
                            <a href="#">
                                <img src={instagram} alt='instagram'></img>
                            </a>
                            <a href="#">
                                <img src={facebook} alt='facebook'></img>
                            </a>
                            <a href="#">
                                <img src={twitter} alt='twitter'></img>
                            </a>
                        </div>

                        <div className={styles.payments}>
                            <img src={payments} alt='payments'></img>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;


 