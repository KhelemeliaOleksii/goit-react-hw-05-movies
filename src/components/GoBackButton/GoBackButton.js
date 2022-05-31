import styles from './GoBackButton.module.css'
export default function GoBackButton({ onClickHandler }) {
    const handler = () => {
        console.log("Go back handler");
        onClickHandler();
    }

    return (
        <button type="button" onClick={handler}>
            <span className={styles['button__label']}>Go back</span>
        </button>
    )
}