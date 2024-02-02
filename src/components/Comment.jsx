import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/99994203?v=4" alt="" />
      <div className={styles.commentBox}>
        
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
                <strong>Vitor Belluzzo</strong>
                <time>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          
          <p>{content}</p>
        </div>
        
        <footer>
          <button>
          <ThumbsUp size={20}/>
          Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
  
}