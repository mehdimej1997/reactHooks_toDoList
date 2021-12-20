import "./App.css";
import TaskListContextProvider from "./context/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <TaskListContextProvider>
      <div className="main-container">
        <div className="list-container">
          <h1 className="header">Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
