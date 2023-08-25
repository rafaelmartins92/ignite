import { ClipboardText } from 'phosphor-react';
import { ITask } from '../../App';
import { Task } from '../Task';

import styles from './tasks.module.css';

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  const taskQuantity = tasks.length;
  const tasksDone = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tasks created</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p className={styles.textDarker}>Done</p>
          <span>
            {tasksDone} de {taskQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
            />
          );
        })}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <ClipboardText size={50} />
            <div>
              <p>You don't have any tasks registred yet.</p>
              <span>Create tasks and organize your to-do items</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
