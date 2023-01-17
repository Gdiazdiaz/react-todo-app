/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todos) => (
          <TodoItem key={todos.id} todos={todos} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
