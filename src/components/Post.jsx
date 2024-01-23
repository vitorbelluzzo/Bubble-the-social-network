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
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉<a href=""> jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>
            <a href=""> #nlw</a>
            <a href=""> #rocketseat</a></p>
        </div>
      
    </article>
  )

}