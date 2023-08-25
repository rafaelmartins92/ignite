import { PlusCircle } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';

import styles from './header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface HeaderProps {
  onCreateTask: (taskTitle: string) => void;
}

export function Header({ onCreateTask }: HeaderProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onCreateTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logoImg} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Create new task"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Create <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
