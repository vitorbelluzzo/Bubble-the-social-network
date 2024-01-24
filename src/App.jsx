import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Comment } from './components/Comment';

import styles from './app.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post/>
        
        
        
       
        </main>
      </div> 
      
    </div>

  )
}

