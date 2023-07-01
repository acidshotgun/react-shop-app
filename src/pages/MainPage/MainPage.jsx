//comonents
import Promo from "../../components/promo/Promo";
import NewCollection from "../../components/newCollection/NewCollection";

//styles
import styles from './mainPage.module.scss';

const MainPage = () => {
    return(
        <div className={styles.container}>
            <Promo/>
            <NewCollection/>
        </div>
    )
}

export default MainPage;
