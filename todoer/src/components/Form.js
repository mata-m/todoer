import React from 'react';

// Todo List Input and Item Filter Form
const Form = ({ setInputText, setTodos, todos, inputText, setFilter }) => {
    // Handles input text change
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    // Creates a new todo item when submit button is clicked
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
             { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("");
    };
    //  Updates the filter state when a filter is selected
    const filterStatusHandler = (e) => {
        setFilter(e.target.value);
    };
    return (
        <form data-testid="form">
            <input
                data-testid="todo-input-field-text"
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"/>
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" data-testid="select">
                <select onChange={filterStatusHandler} name="todos" className="filter-todo">
                    <option data-testid="select-option" value="all">All</option>
                    <option data-testid="select-option" value="completed">Completed</option>
                    <option data-testid="select-option" value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;