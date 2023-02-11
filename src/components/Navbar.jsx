import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <Form>
      <div>
        제목
        <Input type='text' />
        내용
        <Input type='text' />
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
