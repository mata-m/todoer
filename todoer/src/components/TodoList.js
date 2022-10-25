import React from "react";
// Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;