import { Avatar } from "./Avatar";
import { AuthorInfo } from "./AuthorInfo";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, paragraphs, link, hashtags }) {
  return (
    <div className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.authorInfoContainer}>
          <Avatar src={author.avatarUrl} />
          <AuthorInfo name={author.name} role={author.role} />
        </div>
        <time className={styles.publishedAt}>{typeof publishedAt === 'string' ? publishedAt : publishedAt.toLocaleString()}</time>
      </header>
      <div className={styles.content}>
        {paragraphs && paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        {link && link.url && (
          <p>
            <a href={link.url}>{link.text}</a>
          </p>
        )}
        {hashtags && hashtags.length > 0 && (
          <p>
            {hashtags.map(tag => (
              <a key={tag} href="#">{tag} </a>
            ))}
          </p>
        )}
      </div>
      {/* ...comentário e outras partes... */}
    </div>
  );
}