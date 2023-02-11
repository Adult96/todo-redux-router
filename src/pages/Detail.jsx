import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Detail() {
  const {
    state: {
      todo: { id, title, comment },
    },
  } = useLocation();
  return (
    <Main>
      <DetailBox>
        <IdBox>
          <p>ID:{id}</p>
          <Btn>
            <Link to='/'>이전으로</Link>
          </Btn>
        </IdBox>
        <Text fontSize='3rem' weight='bold'>
          {title}
        </Text>
        <Text>{comment}</Text>
      </DetailBox>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DetailBox = styled.div`
  width: 40rem;
  height: 40rem;
  padding: 2rem;
  border: 2px solid ${props => props.theme.grey};
  font-size: 1.5rem;
`;

const IdBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  padding: 1rem;
  border: 4px solid ${props => props.theme.grey};
  background-color: transparent;
  font-size: 1.5rem;
`;

const Text = styled.p`
  margin: 3rem 0;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`;
