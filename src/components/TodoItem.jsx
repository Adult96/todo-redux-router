import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
import { change, deleteItem } from 'utils/modules/todo';

export default function TodoItem({ item }) {
  const { id, title, comment, isDone } = item;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem({ ...item }));
  };

  const handleChange = () => {
    dispatch(change({ ...item }));
  };

  return (
    <Item>
      <Link to={`/detail/${id}`}>상세보기</Link>
      <Text fontSize='2rem' clamp={3}>
        {title}
      </Text>
      <Text clamp={2}>{comment}</Text>
      <BtnBox>
        <Btn borderColor={theme.redPink} onClick={handleDelete}>
          삭제하기
        </Btn>
        <Btn borderColor={theme.melonGreen} onClick={handleChange}>
          {isDone ? '취소!' : '완료!'}
        </Btn>
      </BtnBox>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  border: 4px solid ${props => props.theme.darkMint};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Text = styled.div`
  margin: 1rem;
  font-size: ${props => props.fontSize || '1.5rem'};

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.clamp};
  -webkit-box-orient: vertical;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Btn = styled.button`
  border: 2px solid ${props => props.borderColor};
  border-radius: 0.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  padding: 0.5rem;
`;
