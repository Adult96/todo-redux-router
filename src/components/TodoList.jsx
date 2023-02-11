import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ todo, doneCheck, children }) {
  return (
    <div>
      {children}
      {todo
        .filter(value => value.isDone === doneCheck)
        .map(item => (
          <TodoItem key={uuidv4()} item={item} />
        ))}
    </div>
  );
}
