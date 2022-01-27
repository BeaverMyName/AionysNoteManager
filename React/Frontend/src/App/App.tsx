import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import NotesGrid from '../components/NotesGrid';
import '../locales/config';

const App = () => {
  return (
    <Container>
      <Navbar/>
      <NotesGrid/>
    </Container>
  )
}

export default App