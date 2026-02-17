import { Header } from "./components/Header";
import styles from "./App.module.css";
import modalStyles from "./Modal.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  async function handleCreatePost(formData) {
    const authorName = formData.get("authorName");
    const authorRole = formData.get("authorRole");
    const avatarUrl = formData.get("avatarUrl");
    const paragraphs = formData.get("paragraphs").split("\n");
    const linkText = formData.get("linkText");
    const linkUrl = formData.get("linkUrl");
    const hashtags = formData.get("hashtags").split(" ").filter(Boolean);
    const files = formData.getAll("media");

    setPosts((prevPost) => [
      {
        id: Date.now(),
        author: {
          avatarUrl,
          name: authorName,
          role: authorRole,
        },
        publishedAt: new Date(),
        paragraphs,
        link: { text: linkText, url: linkUrl },
        hashtags,
        media: files.filter((file) => file && file.size > 0).map(
          (file) => ({
            url: URL.createObjectURL(file),
            type: file.type,
          })),
      },
      ...prevPost,
    ]);
    setShowModal(false);
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.sidebarColumn}>
          <Sidebar />
          <button
            className={styles.buttonCreatePost}
            onClick={() => setShowModal(true)}
          >
            Criar Post
          </button>
        </div>
        {showModal && (
          <div className={modalStyles.modalBackdrop}>
            <div className={modalStyles.modalContainer}>
              <button
                className={modalStyles.closeButton}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <form
                className={styles.newPostForm}
                action={async (formData) => {
                  await handleCreatePost(formData);
                }}
              >
                <input name="authorName" placeholder="Nome do autor" required />
                <input
                  name="authorRole"
                  placeholder="Cargo do autor"
                />
                <input name="avatarUrl" placeholder="URL do avatar" required />
                <textarea
                  name="paragraphs"
                  placeholder="Parágrafos (um por linha)"
                />
                <input name="linkText" placeholder="Texto do link" />
                <input name="linkUrl" placeholder="URL do link" />
                <input
                  type="file"
                  name="media"
                  accept="image/*,video/*"
                  multiple
                />
                <input
                  name="hashtags"
                  placeholder="Hashtags (separadas por espaço)"
                />
                <button type="submit">Publicar</button>
              </form>
            </div>
          </div>
        )}
        <main className={styles.main}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              paragraphs={post.paragraphs}
              link={post.link}
              media={post.media}
              hashtags={post.hashtags}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
