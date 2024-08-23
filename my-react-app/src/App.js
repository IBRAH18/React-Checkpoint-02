import './App.css';

import { Container } from 'react-bootstrap';
import { PlayerList } from './PlayerList';

function App() {
  return (
    <Container className='my-5'>
      <PlayerList />
    </Container>
  )
}

export default App;
