import { render, screen, getAllByTestId } from '@testing-library/react';
import App from './App';

test('renders Todo List text', () => {
  render(<App />);
  const listText = screen.getByText(/Todo List/i);
  expect(listText).toBeInTheDocument();
});

test('renders Todo List and Form', () => {
  const {container} = render(<App />);
  let form = getAllByTestId(container, "form")[0];
  let todoList = getAllByTestId(container, "todo-list")[0];
  expect(form).toBeInTheDocument();
  expect(todoList).toBeInTheDocument();
});
