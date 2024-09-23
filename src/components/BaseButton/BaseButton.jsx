import styles from './BaseButton.module.scss';

export default function BaseButton({ textInButton, color, onClick, width }) {
    return (
        <button style={{width: width}} className={`${styles.baseButton} ${color ? styles[`baseButton--${color}`] : ''}`} onClick={onClick}>
            {textInButton}
        </button>
    );
}
