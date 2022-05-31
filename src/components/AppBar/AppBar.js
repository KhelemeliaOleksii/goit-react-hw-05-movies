import Navigation from "components/Navigation";
import styles from './AppBar.module.css'

export default function AppBar() {
    return (
        <div className={styles['app-bar']}>
            <Navigation />
        </div>
    )
}