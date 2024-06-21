import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleCheckboxChange = () => {
    toggleComplete(task.id);
  };

  return (
    <div className={`Todo ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        className="TodoCheckBox"
        title="Completed?"
      />
      <span className="TaskToDo">{task.task}</span>
      <div className="disabled-buttons">
        {!task.completed && ( // Render edit and delete buttons only if task is not completed
          <>
            <FontAwesomeIcon
              className="edit-icon"
              icon={faPenToSquare}
              onClick={() => editTodo(task.id)}
              title="Edit"
            />
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
              title="Delete"
            />
          </>
        )}
      </div>
    </div>
  );
};
