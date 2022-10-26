import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import React from "react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import Todo from "./Todo";

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

let todo = {text: "TodoItem", id: 1, completed: false};
let todos = [todo];
let setTodos = jest.fn();

test('renders Todo component', () => {

    render(<Todo 
        text={todo.text} 
        key={todo.id}
        setTodos={setTodos}
        todos={todos}
        todo={todo} />);
    const todoItem = screen.getByText(/TodoItem/i);
    expect(todoItem).toBeInTheDocument();
});

test('should update todos when complete button clicked', () => {

    const {container} = render(<Todo 
        text={todo.text} 
        key={todo.id}
        setTodos={setTodos}
        todos={todos}
        todo={todo} />);

    fireEvent.click(container.getElementsByClassName("complete-btn")[0]);
    expect(setTodos).toHaveBeenCalled();
});

test('should update todos when delete button clicked', () => {

    const {container} = render(<Todo 
        text={todo.text} 
        key={todo.id}
        setTodos={setTodos}
        todos={todos}
        todo={todo} />);

    fireEvent.click(container.getElementsByClassName("trash-btn")[0]);
    expect(setTodos).toHaveBeenCalled();
});
