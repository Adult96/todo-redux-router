import { Provider } from 'react-redux';
import store from 'utils/config/configStore';
import styled from 'styled-components';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';

export default function App() {
  return (
    <>
      <Header>
        <h2>My Todo List</h2>
        <h2>React</h2>
      </Header>
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid black;
`;
