import styles from './AuthorInfo.module.css'

export function AuthorInfo({name, role}) {
    return (
        <div className={styles.authorInfo}>
            <strong >{name}</strong>
            <span>{role}</span>
        </div>
    )
}