import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList() {
  const { task } = useContext(TaskListContext);
  return (
    <div className={styles.container}>
      <ul className={styles["list-item"]}>
        {task.map((task) => {
          return <Task title={task.title} key={task.id} id={task.id}/>;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
