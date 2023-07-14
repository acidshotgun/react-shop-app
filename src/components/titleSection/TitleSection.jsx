import Title from '../title/Title';

import styles from './titleSection.module.scss';

const TitleSection = ({title, subtitle}) => {
    return(
        <div className={styles.container}>
            <Title title={title}/>
            <div className={styles.navigation}>
                <span>Главная</span>
                <div></div>
                <span>Магазин</span>
            </div>
        </div>
    )
}

export default TitleSection;