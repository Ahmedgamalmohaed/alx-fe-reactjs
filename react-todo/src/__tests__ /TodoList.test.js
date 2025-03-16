// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
Create a test file for the TodoList component in the __tests__ directory. If you haven't already, create the __tests__ directory and add the test file:
sh
mkdir -p ../__tests__
touch ../__tests__/TodoList.test.js
Add the following test code to TodoList.test.js:
JavaScript
// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const headerElement = screen.getByText(/Todo List/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('New Todo Item');
    expect(todoItem).toBeInTheDocument();
  });

  test('toggles todo item completion', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'Complete Todo' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Complete Todo');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'Delete Todo' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    const todoItem = screen.queryByText('Delete Todo');
    expect(todoItem).not.toBeInTheDocument();
  });
});
