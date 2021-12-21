import React, { useContext, useState, useEffect } from "react";
import styles from "./TaskForm.module.css";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const {
    addTask,
    clearAll,
    editTask,
    editItem,
    btnStatus,
    setBtnStatus,
    setEditItem,
  } = useContext(TaskListContext);
  const [taskTitle, setInputTask] = useState("");

  useEffect(() => {
    if (editItem !== null) {
      setInputTask(editItem.title);
    } else {
      setInputTask("");
    }
    return () => {};
  }, [editItem]);

  function submitHandler(e) {
    e.preventDefault();
    if (editItem === null) {
      addTask(taskTitle);
      setInputTask("");
    } else {
      editTask(editItem.id, taskTitle);
      setBtnStatus("Add Task");
      setInputTask("");
      setEditItem(null);
    }
  }

  function handleChange(e) {
    setInputTask(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-control"]}>
        <input
          placeholder="Add Task..."
          type="text"
          required
          onChange={handleChange}
          value={taskTitle}
        />
      </div>
      <div className={styles["btn-container"]}>
        <button type="submit" className={`${styles["add-btn"]} ${styles.btn}`}>
          {btnStatus}
        </button>
        <button
          type="button"
          className={`${styles["add-btn"]} ${styles.btn}`}
          onClick={clearAll}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
