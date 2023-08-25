import { CheckCircle, Trash } from 'phosphor-react';

import styles from './task.module.css';
import { ITask } from '../../App';

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.isCompleted ? <CheckCircle weight="fill" /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.taskCompleted : ''}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
