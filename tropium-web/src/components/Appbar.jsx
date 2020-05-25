import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
    typographyStyle: {
        flex: 1,
        marginLeft: '10px'
    },
    appBarStyle: {
        background: 'linear-gradient(27deg, rgba(118,194,123,1) 0%, rgba(130,208,133,1) 35%, rgba(70,150,74,1) 100%)'
    }
})



export const Appbar = () => {

    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appBarStyle}>
            <Toolbar>
                <Typography color="black" className={classes.typographyStyle}>
                    Tropium Chain
                </Typography>
                <Icon>contact_support</Icon>
            </Toolbar>
        </AppBar>
    )
}
