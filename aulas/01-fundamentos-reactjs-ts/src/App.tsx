import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaelmartins92.png',
      name: 'Rafael Martins',
      role: 'Front-end Developer',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Learn the 8 best tips to improve your JavaScript skills for long-term success.',
      },
      {
        type: 'paragraph',
        content:
          'Here is a list of the best things you can do to sharpen your JavaScript skills.',
      },
      {
        type: 'paragraph',
        content:
          'Make sure you follow every single tip to achieve the right skills.',
      },
      {
        type: 'paragraph',
        content: 'Also, there is a bonus tip that is helpful for everyone.',
      },
      { type: 'link', content: 'www.google.com' },
    ],
    publishedAt: new Date('2023-01-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rafaelmartins92.png',
      name: 'Rafael Costa',
      role: 'Back-end Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Supercharging your NodeJS server development with Visual Backend.',
      },
      { type: 'link', content: 'www.google.com' },
    ],
    publishedAt: new Date('2023-01-10 20:00:00'),
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
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
