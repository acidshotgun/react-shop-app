import Subtitle from '../subtitle/Subtitle';
import CardItem from '../cardItem/CardItem';

import styles from './newCollection.module.scss';

const NewCollection = () => {
    return(
        <div className={styles.container}>
            <Subtitle text='Новая коллекция'/>
            <div className={styles.cards}>
                <CardItem/>
            </div>
        </div>
    )
}

export default NewCollection;