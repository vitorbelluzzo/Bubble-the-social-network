import styles from './Sidebar.module.css';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

             <div className={styles.profile}>
                <strong>Vitor Belluzzo</strong>
                <span>Fullstack Developer</span>
             </div>

             <footer>
                <a href="#">
                    Editar seu perfil
                </a>
             </footer>
        
        </aside>
    )
}