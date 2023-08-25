import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = 'todo - tasks:';
export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function getTasksFromLocalStorage() {
    const tasksStoraged = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (tasksStoraged) {
      setTasks(JSON.parse(tasksStoraged));
    }
  }

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  function saveTasksOnLocalStorage(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function createTask(taskTitle: string) {
    saveTasksOnLocalStorage([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    saveTasksOnLocalStorage(newTasks);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      } else {
        return task;
      }
    });

    saveTasksOnLocalStorage(newTasks);
  }

  return (
    <>
      <Header onCreateTask={createTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onCompleteTask={toggleTaskCompleted}
      />
    </>
  );
}

export default App;
