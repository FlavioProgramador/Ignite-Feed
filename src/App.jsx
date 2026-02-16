import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.main}>
          <Post/>

        </main>
      </div>
    </div>
  );
}

export default App;
