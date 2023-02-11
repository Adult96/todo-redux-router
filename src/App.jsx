import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <Header>
        <h2>My Todo List</h2>
        <h2>React</h2>
      </Header>
      <Navbar />
      <Outlet />
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid black;
`;
