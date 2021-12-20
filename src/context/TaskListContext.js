import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const tasks = [
  { id: 1, title: "hello" },
  { id: 2, title: "hello2" },
];

function TaskListContextProvider(props) {
  const [task, setNewTask] = useState(tasks);

  function addTask(title) {
    setNewTask((prevTasks) => [...prevTasks, { title: title, id: uuidv4() }]);
  }

  function removeTask(id) {
    setNewTask(task.filter((task) => task.id !== id));
  }

  function editTask(id, title) {}

  function clearAll() {
    setNewTask([]);
  }

  return (
    <TaskListContext.Provider
      value={{ task, addTask, removeTask, editTask, clearAll }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
