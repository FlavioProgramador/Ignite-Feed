import { AuthorInfo } from "./AuthorInfo";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <div className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.authorInfoContainer}>
          <Avatar src="https://github.com/flaviobastos.png" />
          <AuthorInfo name="João Ricardo" role="Cibersecurity" />
        </div>
        <time className={styles.publishedAt}>Publicado a 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> 
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario"></textarea>
        <footer>
            <button type="submit"> Publicar</button>
        </footer>
      </form>
    </div>
  );
}
