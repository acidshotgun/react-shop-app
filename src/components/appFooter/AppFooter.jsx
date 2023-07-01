import HeaderMenu from '../headerMenu/HeaderMenu';

import styles from './appFooter.module.scss';
import instagram from '../../resources/icons/instagram.png';
import facebook from '../../resources/icons/facebook.png';
import twitter from '../../resources/icons/twitter.png';
import payments from '../../resources/icons/visa-mastercard.png';

const AppFooter = () => {
    return(
        <footer>
            <div className={styles.container}>
                <HeaderMenu/>
                <div className={styles.contacts}>
                    <p className={styles.phone}>+7 (495) 823-54-12</p>
                    <p className={styles.email}>hello@womazing.com</p>
                    <div className={styles.socials}>
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
        </footer>
    )
}

export default AppFooter;