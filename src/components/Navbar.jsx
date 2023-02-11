import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { add } from 'utils/modules/todo';
import { v4 as uuidv4 } from 'uuid';

export default function Navbar() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(add({ id: uuidv4(), title, comment, isDone: false }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        제목
        <Input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        내용
        <Input
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <Btn>추가하기</Btn>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.grey};
  font-size: 1.3rem;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 0 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.3rem;
`;

const Btn = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  background-color: ${props => props.theme.darkMint};
  color: white;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;
