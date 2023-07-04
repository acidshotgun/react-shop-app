import error from './error.gif';
import styles from './errorMessage.module.scss';

const ErrorMessage = () => {
    return(
        <img className={styles.img} src={error} alt='error'></img>
    )
}

export default ErrorMessage;