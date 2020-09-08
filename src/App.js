import React from 'react';
import NavBar from './components/NavBar'
import HeadLine from './components/Home/HeadLine'
import Tags from './components/Home/Tags'
import {Grid} from '@material-ui/core'

function App() {
  return (
      <React.Fragment>
      <NavBar />
      <HeadLine />
      <Tags />
      </React.Fragment>
  );
}

export default App;
