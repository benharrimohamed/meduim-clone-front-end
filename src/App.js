import React, {useState} from 'react';
import {NavBar} from './components/NavBar'
import HeadLine from './components/Home/HeadLine'
import Tags from './components/Home/Tags'
import {makeStyles , Grid ,Typography} from '@material-ui/core'
import {GetStartedButton} from './components/Home/GetStartedButton'


const useStyles = makeStyles (theme => ({
  text : {
   textAlign : "center",
   padding : 20,
   fontSize : 18,
   fontWeight : "normal"
  }
}))


function App() {

  const [user , setUser] = useState('user')
  const classes = useStyles();
  return (
        <React.Fragment>
        <NavBar className={classes.navBar}/>
        <HeadLine></HeadLine>
        <Tags></Tags>
        <GetStartedButton height={60} width={400} fontSize={20}></GetStartedButton>
        <Typography className={classes.text}>Alreadi have an account , Sign in ?</Typography>
        </React.Fragment>
  );
}


export default App;
