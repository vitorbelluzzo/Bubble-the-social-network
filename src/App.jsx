import { Header } from './components/Header';
import { Post } from './post';
import './global.css';

export function App() {
  return (
    <div>

      <Header />
          
      <Post
        author="Vitor "
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta recusandae autem esse, architecto ex deleniti illo, ea in cum adipisci sequi a, ipsum fuga. Obcaecati vel eum et eaque quisquam."
      />
      <Post
        author="Sophia "
        content="Post incrivel!"
      />
    </div>

  )
}

