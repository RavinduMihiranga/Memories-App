import React from "react";
import {Container, AppBar, Typography} from '@mui/material';

import memories from './images/memories.png'
const App = () => {
  return (
    <Container maxWidth ='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="500"/>
      </AppBar>

    </Container>
  )

}

export default App;
