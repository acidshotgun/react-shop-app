import notFound from './404.gif';
import styles from './notFound.module.scss';

const NotFound = () => {
    return(
        <div className={styles.container}>
            <span>404</span>
            <h1>Page not found...</h1>
            <div className={styles.image}>
                <img src={notFound} alt='404'></img>
            </div>
        </div>
    )
}

export default NotFound;