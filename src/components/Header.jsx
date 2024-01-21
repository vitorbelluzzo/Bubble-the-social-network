import styles from './Header.module.css';
import bubblelogo from '../assets/bubble-logo.svg';
import bubbletext from '../assets/bubble-text.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={bubblelogo} alt="logotipo bubble" />
            <img src={bubbletext} alt="logotipo bubble" />
        </header>
    );
}
