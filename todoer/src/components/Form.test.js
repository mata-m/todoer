import { render, fireEvent, cleanup, getAllByTestId} from "@testing-library/react";
import React from "react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import Form from "./Form";
import App from "../App";

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

test('renders Form component', () => {
    const {container} = render(<App />);

    const formInputField = container.getElementsByClassName("todo-input")[0];
    const formSubmitButton = container.getElementsByClassName("todo-button")[0];
    const formTodoFilterSelect = container.getElementsByClassName("filter-todo")[0];
    
    expect(formInputField).toBeInTheDocument();
    expect(formSubmitButton).toBeInTheDocument();
    expect(formTodoFilterSelect).toBeInTheDocument();
});

test('should default to showing all todos', () => {
    const inputText = "TodoItem";
    const todos = [{text: "TodoItem", id: 1, completed: false}];
    const setTodos = jest.fn();
    const setInputText = jest.fn();
    const setFilter = jest.fn();

    const {container} = render(<Form
                                    inputText={inputText}
                                    todos={todos}
                                    setTodos={setTodos}
                                    setInputText={setInputText} 
                                    setFilter={setFilter}/> );

    let options = getAllByTestId(container, 'select-option');

    expect(options[0].selected).toBe(true);
    expect(options[1].selected).toBe(false);
    expect(options[2].selected).toBe(false);
});

test('should allow user to change todo type filter', () => {
    const inputText = "TodoItem";
    const todos = [{text: "TodoItem", id: 1, completed: false}];
    const setTodos = jest.fn();
    const setInputText = jest.fn();
    const setFilter = jest.fn();

    const {container} = render(<Form
                                    inputText={inputText}
                                    todos={todos}
                                    setTodos={setTodos}
                                    setInputText={setInputText} 
                                    setFilter={setFilter}/> );

    fireEvent.select(container.getElementsByClassName("filter-todo")[0], {target: {value: "completed"}});

    let options = getAllByTestId(container, 'select-option');

    expect(options[0].selected).toBe(false);
    expect(options[1].selected).toBe(true);
    expect(options[2].selected).toBe(false);
});

test('should allow user to create todo and auto-clear input field after', () => {
    const inputText = "TodoItem";
    const todos = [{text: "TodoItem", id: 1, completed: false}];
    const setTodos = jest.fn();
    const setInputText = jest.fn();
    const setFilter = jest.fn();

    const {container} = render(<Form
                                    inputText={inputText}
                                    todos={todos}
                                    setTodos={setTodos}
                                    setInputText={setInputText} 
                                    setFilter={setFilter}/> );
    
    expect(getAllByTestId(container, "todo-input-field-text")[0].value).toBe(inputText);
    fireEvent.click(container.getElementsByClassName("todo-button")[0]);
    expect(setTodos).toHaveBeenCalled();
    expect(setInputText).toHaveBeenCalled();
});
