import styles from './Header.module.css'
import { Logo } from './Logo'

export function Header({children}) {
    return (
        <header className={styles.header}>
            <Logo />
            <p>{children}</p>
        </header>
    )
}