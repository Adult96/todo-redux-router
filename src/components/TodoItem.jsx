import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoItem({ item }) {
  const { id, title, comment, isDone } = item;
  return (
    <div>
      <Link to={`/detail/${id}`}>상세보기</Link>
      <p>{title}</p>
      <p>{comment}</p>
      <div>
        <button>삭제하기</button>
        <button>{isDone ? '취소!' : '완료!'}</button>
      </div>
    </div>
  );
}
