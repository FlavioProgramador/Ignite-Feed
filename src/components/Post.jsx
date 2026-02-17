import { Avatar } from "./Avatar";
import { AuthorInfo } from "./AuthorInfo";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, paragraphs, link, hashtags, media }) {
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
        {media && media.length > 0 && (
          <div className={styles.media}>
            {media.map((item, idx) =>
              item.type.startsWith("image/") ? (
                <img key={idx} src={item.url} alt="" style={{ maxWidth: "100%", margin: "8px 0" }} />
              ) : (
                <video key={idx} src={item.url} controls style={{ maxWidth: "100%", margin: "8px 0" }} />
              )
            )}
          </div>
        )}
        {hashtags && hashtags.length > 0 && (
          <p>
            {hashtags.map(tag => (
              <a key={tag} href="#">{tag} </a>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}