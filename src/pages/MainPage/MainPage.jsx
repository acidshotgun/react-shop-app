//comonents
import Promo from "../../components/promo/Promo";
import NewCollection from "../../components/newCollection/NewCollection";
import Subtitle from "../../components/subtitle/Subtitle";

import cog from './cog1.png';
import hand from './hand1.png';
import quality from './quality1.png';

//styles
import styles from './mainPage.module.scss';

const MainPage = () => {
    return(
        <div className={styles.container}>
            <Promo/>
            <NewCollection/>
            <Triggers />
        </div>
    )
}

export default MainPage;

const Triggers = () => {
    return(
        <div className={styles.triggers}>
        <Subtitle text={'Что для нас важно'}/>
        <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.img}>
                    <img src={quality} alt="trigger"></img>
                </div>
                <span>Качество</span>
                <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного <br/> качества</p>
            </div>

            <div className={styles.item}>
                <div className={styles.img}>
                    <img src={cog} alt="cog"></img>
                </div>
                <span>Скорость</span>
                <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших <br/> собственных цехах</p>
            </div>

            <div className={styles.item}>
                <div className={styles.img}>
                    <img src={hand} alt="hand"></img>
                </div>
                <span>Ответственность</span>
                <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все <br/> это Womazing</p>
            </div>
        </div>
    </div>
    )
}
