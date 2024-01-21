import { Header } from './components/Header';
import { Post } from './post';
import './global.css';
import styles from './app.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Vitor "
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta recusandae autem esse, architecto ex deleniti illo, ea in cum adipisci sequi a, ipsum fuga. Obcaecati vel eum et eaque quisquam."
        />
        <Post
        author="Sophia "
        content="Post incrivel!"
        />
        </main>
      </div> 
      
    </div>

  )
}

