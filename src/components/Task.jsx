import React, { useContext } from "react";
import styles from "./Task.module.css";
import { TaskListContext } from "../context/TaskListContext";

function Task(props) {
  const { removeTask, editTask } = useContext(TaskListContext);
  return (
    <li className={styles.item}>
      <span>{props.title}</span>
      <div>
        <button className={styles.btn} onClick={() => removeTask(props.id)}>
          <i className="fas fa-trash-alt fa-lg"></i>
        </button>
        <button className={styles.btn}>
          <i className="fas fa-pen-square fa-lg"></i>
        </button>
      </div>
    </li>
  );
}

export default Task;
