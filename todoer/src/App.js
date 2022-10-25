import React, { useState } from 'react';
import './App.css';
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>Todo List</header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
