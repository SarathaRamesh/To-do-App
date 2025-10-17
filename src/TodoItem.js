import React from "react";

function TodoItem({ task, index, toggleTask, editTask, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={() => toggleTask(index)}>✔</button>
        <button onClick={() => editTask(index)}>✏️</button>
        <button onClick={() => deleteTask(index)}>🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
