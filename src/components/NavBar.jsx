// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
import React from 'react';
import {Toolbar , AppBar , Typography , Button} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {GetStartedButton} from './Home/GetStartedButton'

// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 
// hell guys i'm learnig Vim 

const useStyles = makeStyles (theme => ({
    root: {
    marginBottom : 200,
    zIndex: 10,
    color: '#212121'
      },
    Appbar : {
      padding : 14,
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


export const NavBar = () => {

const theme = useTheme();
const classes = useStyles(theme)
const matches = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
    <div className={classes.root}> 
    <AppBar position="absolute" color="transparent" className={classes.Appbar}>
        <Toolbar> 
          <Typography variant="h3" className={classes.title}>
            Meduim.
          </Typography> <Typography onClick={() => {console.log('hello')}} className={classes.menuItem}>Subscribe</Typography> <Typography className={classes.menuItem}>Write</Typography> <Typography className={classes.menuItem}>Sign in</Typography> <GetStartedButton height={48}/> </Toolbar>
    </AppBar>
    </div>
    );
}
