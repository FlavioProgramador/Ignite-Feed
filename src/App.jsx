import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Flávio" content="Hello World!" />
          <Post author="Maria" content="How are you?" />
        </main>
      </div>
    </div>
  );
}

export default App;
