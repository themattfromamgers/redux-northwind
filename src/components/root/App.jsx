import React from 'react';
import { Container } from 'reactstrap'
import Navi from '../navi/Navi';
import Dashboard from './dashboard';

function App() {
  return (

    <>
      <Container>
        <Navi />
        <Dashboard />
      </Container>
    </>
  );
}



export default App;