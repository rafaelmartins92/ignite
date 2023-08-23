import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tasks created</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.textDarker}>Done</p>
          <span>2/10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
      </div>
    </section>
  );
}
