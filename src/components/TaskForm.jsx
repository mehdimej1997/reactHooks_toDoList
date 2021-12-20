import React, { useContext, useState } from "react";
import styles from "./TaskForm.module.css";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const { addTask, clearAll } = useContext(TaskListContext);
  const [taskTitle, setInputTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    addTask(taskTitle);
    setInputTask("");
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
          Add Task
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
