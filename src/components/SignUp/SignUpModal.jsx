import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import SignUpButton from './SignUpButton';
import {userContext} from '../../App'



const useStyles = makeStyles (({
    root : {
     textAlign : "center",
     height : "100%"
    },
    title : {
      fontSize : 25,
      fontFamily : "Robot",
      fontWeight : "Bold",
      padding : 80
    },
    content : {
      display : "flex",
      flexDirection : "column"
    }, 
    button : {
     backgroundColor: "white",
     border : "1px solid black",
     padding : 10,
     margin : 20
    }, 
    text : {
        maxWidth : 400,
        margin : 20
    }
}))


export default function SignUpModal(props) {

  const user = useContext(userContext)
  const classes = useStyles();
  const { onClose, open } = props;
  
  return (
    <Dialog className={classes.root} onClose={onClose} open={open}>
      <DialogTitle id="simple-dialog-title">
  <Typography className={classes.title}>Join Meduim {user}</Typography>
      </DialogTitle>
      <DialogContent className={classes.content}>
      <SignUpButton onClick = {() => {
        setUser('logged In ')
      }}/>
      <Typography className={classes.text}>Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</Typography>
      </DialogContent>
    </Dialog>
  );
}




