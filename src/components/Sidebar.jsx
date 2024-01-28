import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from "phosphor-react";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

             <div className={styles.profile}>
               <Avatar  src='https://media.istockphoto.com/id/1226202062/pt/foto/caucasian-woman-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=x1SQzaz45P1mAQZjkvd2hVSsb-i1w7Yx2AlGGggUuFM=' />
                <strong>Vitor Belluzzo</strong>
                <span>Fullstack Developer</span>
             </div>

             <footer>
             
                <a href="#">
                <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
             </footer>
        
        </aside>
    )
}