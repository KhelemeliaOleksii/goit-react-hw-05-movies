import styles from './GoBackButton.module.css'
import PropTypes from 'prop-types'

/* function GoBackButton 
do: create a button "Go back"
*/
export default function GoBackButton({ onClickHandler }) {
    const handler = () => {
        onClickHandler();
    }

    return (
        <button type="button" className={styles['button']} onClick={handler}>
            <span className={styles['button__arrow']}> </span> <span className={styles['button__label']}>Go back</span>
        </button>
    )
}

GoBackButton.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
}