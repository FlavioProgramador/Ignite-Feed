import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post author="Flávio" content="Hello World!" />
          <Post author="Maria" content="How are you?" />
        </main>
      </div>
    </div>
  );
}

export default App;
