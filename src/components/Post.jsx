import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/99994203?v=4" alt="" />}
          <div className={styles.authorInfo}>
            <strong>Vitor Belluzzo</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time title='20 de Janeiro às 20:30' dateTime='2024-01-22 20:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>

        <p> Fala galeraaa 👋</p>
        <p>Estou animado por fazer parte desta comunidade inovadora. Vamos juntos explorar as possibilidades e construir conexões incríveis! 🚀</p>
        <p>👉<a href=""> vitorbelluzzo/bubble</a></p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #bubble</a>
          <a href=""> #socialmedia</a></p>
      </div>
      <form className={styles.commentForm} >
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="O que você achou do projeto?"
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>



    </article>
  )

}