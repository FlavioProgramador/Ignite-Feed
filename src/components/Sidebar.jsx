import styles from "./Sidebar.module.css";
import botaoEditarPerfil from "../assets/botao-editar-perfil.svg";
import { Avatar } from "./Avatar";
import { AuthorInfo } from "./AuthorInfo";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/FlavioProgramador.png" />
        <AuthorInfo name="Flávio Costa" role="Front-end Developer" />
      </div>
      <footer className={styles.footer}>
        <a href="#"><img src={botaoEditarPerfil} alt="Editar Perfil" />Editar Perfil</a>
      </footer>
    </aside>
  );
}
