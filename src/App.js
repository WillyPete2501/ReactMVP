import React from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="container">
      <TaskInput />
      <ListTask />
    </div>
  );
}

export default App;
