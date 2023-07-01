import styles from './subtitle.module.scss';

const Subtitle = ({text}) => {
    return(
        <h2 className={styles.subtitle}>{text}</h2>
    )
}

export default Subtitle;