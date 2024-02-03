import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://img.a.transfermarkt.technology/portrait/big/139867-1668498219.jpg?lm=1",
      name: "Robert Arboleda",
      role: "Zagueiro @SãoPauloFC",
    },
    content: [
      { type: "paragraph", content: "Fala Nação Tricolor" },
      {
        type: "paragraph", content: "É com grande alegria e emoção que compartilho com vocês a notícia que muitos estavam esperando: estou oficialmente renovando meu contrato com este clube incrível até 2028! 🤝",
      },
      { type: "link", content: "#spfc " },
      { type: "link", content: "#robertarboleda"},
      { type: "link", content: "#2028"}
    ],
    publishedAt: new Date("2024-01-29 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://img.a.transfermarkt.technology/portrait/big/284727-1583506567.jpg?lm=1",
      name: "Jonathan Calleri",
      role: "Atacante @SãoPauloFC",
    },
    content: [
      { type: "paragraph", content: "Ansioso para o jogo de amanhã!" },
      
      { type: "link", content: "https://www.espn.com.br/futebol/sao-paulo/artigo/_/id/13168926/calleri-decisivo-lider-tudo-paulistao-5-pontos-sao-paulo-vao-alem-quebra-tabu" },
    ],
    publishedAt: new Date("2024-01-19 20:00:00"),
  },
  
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
