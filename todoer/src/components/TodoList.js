import React from "react";
// Import Components
import Todo from "./Todo";

const TodoList = ({filteredTodos, toggleTodoStatus, removeTodo }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list" data-testid="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id}
                        todo={todo}
                        toggleTodoStatus={toggleTodoStatus}
                        removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;