import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

export default function TodoList({ todo, doneCheck, children }) {
  console.log(todo);
  return (
    <>
      {children}
      <List>
        {todo
          .filter(value => value.isDone === doneCheck)
          .map(item => (
            <TodoItem key={uuidv4()} item={item} />
          ))}
      </List>
    </>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
