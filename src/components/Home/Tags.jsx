import React from 'react';
import {Typography , makeStyles}  from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles (theme => ({

    root : {
    textAlign : "center",
    margin : 100,
    marginBottom : 20,
    padding: 10
    },
   tag: {
       fontSize : 20,
       margin : 10,
       padding : 20,
       paddingLeft : 0 ,
       paddingRight : 0 
    },
    avatar : {
     backgroundColor : "black",
     padding: 4
    },
    text : {
     color : "white",
     fontSize : 25,
     fontWeight : "bold"
    }
}))

export default function Tags () {

    const classes = useStyles()
    return (
    <div className={classes.root}>  
     <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>

     <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="Science" className={classes.tag}/>

    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="Python" className={classes.tag}/>

    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="Physics" className={classes.tag}/>

    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="Animals" className={classes.tag}/>

    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>
    
    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>

    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>
    
    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>
    
    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>
    
    <Chip  avatar={<Avatar className={classes.avatar}><Typography className={classes.text}>#</Typography></Avatar>} 
     label="JavaScript" className={classes.tag}/>
    
    </div> 
    )
}