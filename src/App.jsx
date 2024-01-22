import { Header } from './components/Header';
import { Post } from './components/Post';
  import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';
import './global.css';

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
       
        </main>
      </div> 
      
    </div>

  )
}

