import { NavLink } from "react-router-dom";

import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={styles['nav']}>
            <NavLink to='/'
            >
                Home
            </NavLink>
            <NavLink to='/movies'>
                Movies
            </NavLink>
        </nav>
    )
}