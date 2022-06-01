import styles from './GoBackButton.module.css'
import PropTypes from 'prop-types'

export default function GoBackButton({ onClickHandler }) {
    const handler = () => {
        onClickHandler();
    }

    return (
        <button type="button" onClick={handler}>
            <span className={styles['button__label']}>Go back</span>
        </button>
    )
}

GoBackButton.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
}