import styles from './PageHeading.module.css'
export default function PageHeading({ children }) {
    return (
        <h1 className={styles['page-heading']}>
            {children}
        </h1>
    )
}