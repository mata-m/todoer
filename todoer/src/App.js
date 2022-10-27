import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import useTodoStore from './app/todoStore';

function App() {

  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const addTodo = useTodoStore((state) => state.addTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus)
  const todos = useTodoStore((state) => state.todos)

  // Update the shown filtered todos when the filter state changes or new todos
  // are added. 
  useEffect(() => {
    filterHandler();
  }, [todos, filter]);

  // Updates the filtered todos shown when the filter state is updated
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  };

  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        inputText={inputText}
        addTodo={addTodo}
        setInputText={setInputText} 
        setFilter={setFilter}
        />
      <TodoList 
        filteredTodos={filteredTodos}
        toggleTodoStatus={toggleTodoStatus}
        removeTodo={removeTodo} />
    </div>
  );
}

export default App;
