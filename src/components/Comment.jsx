import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/99994203?v=4" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Belluzzo</strong>
              <time title='20 de Janeiro às 20:30' dateTime='2024-01-22 20:30'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom João, parabéns!!</p>
        </div>
        <footer>
          <ThumbsUp size={20}/>
          Aplaudir <span>20</span>
        </footer>

      </div>
    </div>
  )
  
}