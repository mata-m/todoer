import React from 'react';

// Todo List Input and Item Filter Form
const Form = ({ setInputText, setTodos, todos, inputText }) => {
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
    return (
        <form>
            <input 
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"/>
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;