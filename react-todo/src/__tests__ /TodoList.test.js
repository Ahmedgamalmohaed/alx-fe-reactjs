import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const newTodoItem = screen.getByText('New Task');
    expect(newTodoItem).toBeInTheDocument();
  });

  test('removes a todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'Task to be removed' } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    const removedTodoItem = screen.queryByText('Task to be removed');
    expect(removedTodoItem).not.toBeInTheDocument();
  });
});
