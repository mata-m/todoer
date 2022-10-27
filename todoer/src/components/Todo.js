import React from 'react';

const Todo = ({ text, todo, toggleTodoStatus, removeTodo}) => {
    // Deletes the todo item when delete button is clicked
    const deleteHandler = () => {
        removeTodo(todo.id);
    };
    // Toggles the todo item status when the checkbox is clicked
    const completeHandler = () => {
        toggleTodoStatus(todo.id);
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;