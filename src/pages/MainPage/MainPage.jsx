import styles from './mainPage.module.scss';
import woman from '../../resources/img/woman_main.png'

const MainPage = () => {
    return(
        <div className={styles.main}>
            <div className={styles.separator}></div>
            <div className={styles.container}>
                <div className={styles.content}>

                </div>

                <div className={styles.pictures}>
                    <div className={styles.images}>
                        <div className={styles.mainImage}>
                            <img src={woman} alt='woman'></img>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;