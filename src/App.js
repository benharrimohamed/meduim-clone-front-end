import React from 'react';
import {NavBar} from './components/NavBar'
import HeadLine from './components/Home/HeadLine'
import Tags from './components/Home/Tags'
import {makeStyles , Grid ,Typography} from '@material-ui/core'
import {GetStartedButton} from './components/Home/GetStartedButton'

const useStyles = makeStyles ({
  text : {
   textAlign : "center",
   padding : 20,
   fontSize : 18,
   fontWeight : "normal"
  }
})

function App() {
  const classes = useStyles();
  return (
      <div>
      <NavBar className={classes.navBar}/>
      <HeadLine />
      <Tags />
      <GetStartedButton height={60} width={400} fontSize={20}/>
      <Typography className={classes.text}>Alreadi have an account , Sign in ?</Typography> 
      </div>
  );
}

export default App;
