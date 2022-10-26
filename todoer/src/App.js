import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // Set initial todo list state from local storage
  let initTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(initTodos);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Update the shown filtered todos when the filter state changes or new todos
  // are added. 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
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

  // Save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} 
        setFilter={setFilter}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
