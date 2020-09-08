import React from 'react';
import {Toolbar , AppBar , Typography , Button} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles (theme => ({
    root: {
    marginBottom : 200,
    zIndex: 10,
      },
    Appbar : {
      padding : 14,
    },
    menuButton: {
        background: '#00c853',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginRight: theme.spacing(3),
        '&:hover': {
        background: "#00e676",
         },
      },
    title: {
        flexGrow: 1,
        fontSize : 24,
      },
    menuItem : {
        marginRight: theme.spacing(3),
        fontSize : 16,
      }
}))

 export default function NavBar (){
    
    const theme = useTheme();
    const classes = useStyles(theme)
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
    <div className={classes.root}> 
    <AppBar position="fixed" color="transparent" className={classes.Appbar}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Meduim.
          </Typography>
          <Typography onClick={() => {console.log('hello')}} className={classes.menuItem}>Subscribe</Typography>
          <Typography className={classes.menuItem}>Write</Typography>
          <Typography className={classes.menuItem}>Sign in</Typography>
          <Button className={classes.menuButton}> Get Started </Button>
        </Toolbar>
    </AppBar>
    </div>
    );
}