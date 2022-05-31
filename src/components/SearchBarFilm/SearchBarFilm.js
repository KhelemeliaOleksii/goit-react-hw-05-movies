import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './SearchBarFilm.module.css'

export default function SearchBarFilm({ onSubmitFormHandler }) {
    const [value, setValue] = useState('');
    const changeValueHandler = ({ target }) => {
        setValue(target.value);
    }
    const reset = () => {
        setValue('');
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        onSubmitFormHandler(value);
        reset();
    }
    return (
        <form className={styles['search-bar']} onSubmit={submitFormHandler}>
            <input type="text" onChange={changeValueHandler} value={value} autoComplete='off' autoFocus placeholder='Search film' />
            <button type='submit' className={styles.button} >
                <span>Search</span>
            </button>
        </form>
    )
}

SearchBarFilm.propTypes = {
    onSubmitFormHandler: PropTypes.func.isRequired,
}