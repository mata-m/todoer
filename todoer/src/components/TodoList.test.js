import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import TodoList from "./TodoList";

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

let todo = {text: "TodoItem", id: 1, completed: false};
let todos = [todo];
let setTodos = jest.fn();
let filteredTodos = todos;

test('renders TodoList component', () => { 
    render(<TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />);

    const todoItem = screen.getByText(/TodoItem/i);
    expect(todoItem).toBeInTheDocument();
});
