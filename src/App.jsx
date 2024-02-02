import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeloteros.com.ec%2Fsitioweb%2Fwp-content%2Fuploads%2F2022%2F01%2FIMG_20220104_163441.jpg&f=1&nofb=1&ipt=4cf02b7bfdfea521263d13062308b858c54413e134ce14c4247fb3992b04193c&ipo=images",
      name: "Robert Arboleda",
      role: "Zagueiro @SãoPauloFC",
    },
    content: [
      { type: "paragraph", content: "Fala galeraaa 👋" },
      {
        type: "paragraph", content: "Estou animado por fazer parte desta comunidade inovadora. Vamos juntos explorar as possibilidades e construir conexões incríveis! 🚀",
      },
      { type: "link", content: "vitorbelluzzo/bubble" },
    ],
    publishedAt: new Date("2024-01-29 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99994203?v=4",
      name: "Sophia Pessoa",
      role: "FullStack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraaa 👋" },
      {
        type: "paragraph",
        content:
          "Estou animado por fazer parte desta comunidade inovadora. Vamos juntos explorar as possibilidades e construir conexões incríveis! 🚀",
      },
      { type: "link", content: "vitorbelluzzo/bubble" },
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
