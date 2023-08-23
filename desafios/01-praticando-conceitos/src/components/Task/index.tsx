import { Trash } from 'phosphor-react';

import styles from './task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium
        totam aperiam dolore architecto ex odio, accusamus unde iusto quod!
      </p>

      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}
