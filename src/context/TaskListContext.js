import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

function TaskListContextProvider(props) {
  const [task, setNewTask] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [btnStatus, setBtnStatus] = useState("Add Task");

  function addTask(title) {
    setNewTask((prevTasks) => [...prevTasks, { title: title, id: uuidv4() }]);
  }

  function removeTask(id) {
    setNewTask(task.filter((task) => task.id !== id));
  }

  function clearAll() {
    setNewTask([]);
  }

  function findItem(id) {
    const item = task.find((task) => task.id === id);
    setEditItem(item);
    setBtnStatus("Edit Task");
  }

  function editTask(id, title) {
    const newTasks = task.map((task) =>
      task.id === id ? { title, id } : task
    );
    setNewTask(newTasks);
  }

  return (
    <TaskListContext.Provider
      value={{
        task,
        editItem,
        btnStatus,
        addTask,
        removeTask,
        findItem,
        clearAll,
        editTask,
        setBtnStatus,
        setEditItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
