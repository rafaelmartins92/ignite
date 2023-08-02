import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafaelmartins92.png",
      name: "Rafael Martins",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Sapiente distinctio porro ab consectetur sunt laudantium id laborum veniam, illum soluta.",
      },
      { type: "link", content: "www.google.com" },
    ],
    publishedAt: new Date("2023-01-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafaelmartins92.png",
      name: "Rafael Costa",
      role: "Back-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Sapiente distinctio porro ab consectetur sunt laudantium id laborum veniam, illum soluta.",
      },
      { type: "link", content: "www.google.com" },
    ],
    publishedAt: new Date("2023-01-10 20:00:00"),
  },
];

export function App() {
  return (
    <>
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
    </>
  );
}
