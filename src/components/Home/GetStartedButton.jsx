import React , {useState} from 'react';
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SignUpModal from '../SignUp/SignUpModal'


const useStyles = makeStyles ((props) => ({
    
    root : {
    textAlign: 'center'
    },
    menuButton: props => ({
        background: '#00c853',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: props.height,
        width : props.width,
        fontSize : props.fontSize,
        padding: '0 30px',
        marginRight: 25,
        '&:hover': {
        background: "#00e676",
     },
    }),
}))



const GetStartedButton = (props) => {

    const classes = useStyles(props)
    const [open , setOpen ] = useState(false);

    const OpenModal = () => {
    
        setOpen(true)
    }
    
    const CloseModal = () => {
    
        setOpen(false);
    }

  return (
      <div className={classes.root}>
      <Button onClick={OpenModal} className={classes.menuButton}> Get Started </Button>
      <SignUpModal open={open} onClose={CloseModal} />
      </div>
  )

}


export {GetStartedButton}
