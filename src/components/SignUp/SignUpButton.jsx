import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles (({
    button : {
     backgroundColor: "white",
     border : "1px solid black",
     padding : 10,
     margin : 20
    }
}))


export default function SignUpButton (props) {

    const {loggeIn} = props
   
    const classes = useStyles();
    return (
    <Button onclick={loggeIn} variant="contained" className={classes.button}>Sign up with Google</Button> 
    )
}

