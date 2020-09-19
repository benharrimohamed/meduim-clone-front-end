import React from 'react';
import {Typography , makeStyles}  from '@material-ui/core'

const useStyles = makeStyles ({


    root :  {
    zIndex : 0
    },
    header : {
        fontFamily: "medium-marketing-display-font",
        fontWeight : "bold",
        textAlign: 'center',
        justifyItems : 'center',
        margin: 100,
        marginBottom : 10,
        color : "#212121",
    },
    subHeader : {
        fontFamily: "Roboto",
        fontWeight : "bold",
        textAlign: 'center',
        justifyItems : 'center',
        fontSize : 20,
        color :"#212121"
    }

})

export default function HeadLine () {

    const classes = useStyles()
    return (
    <div className={classes.root}>  
    <Typography  className={classes.header} variant="h1" >Dive deeper on topics that <br/>matter to you.</Typography>
    <Typography className={classes.subHeader}>Select what you're into. We'll help you find great things to read.</Typography>
    </div> 
    )
}