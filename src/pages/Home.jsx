import TodoList from 'components/TodoList';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { todo } = useSelector(state => state);
  return (
    <>
      <TodoList todo={todo} doneCheck={false}>
        <p>Working...🔥</p>
      </TodoList>
      <TodoList todo={todo} doneCheck={true}>
        <p>Done...🎉</p>
      </TodoList>
    </>
  );
}
