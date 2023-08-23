import { PlusCircle } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} />

      <form className={styles.newTaskForm}>
        <input placeholder="Create new task" />
        <button>
          Create <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
