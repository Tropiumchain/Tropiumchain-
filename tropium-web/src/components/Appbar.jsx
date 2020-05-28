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
        background: 'linear-gradient(27deg, rgba(118,194,123,1) 0%, rgba(130,208,133,1) 35%, rgba(70,150,74,1) 100%)',
        color: '#000'
    }
})


// https://t.me/Tropiumchain

export const Appbar = () => {

    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appBarStyle}>
            <Toolbar>
                <Typography className={classes.typographyStyle}>
                    Tropium Chain
                </Typography>
                <a href="https://t.me/Tropiumchain" target="_new">
                    <Icon onClick={() => console.log('clicked icon')}>contact_support</Icon>
                </a>

            </Toolbar>
        </AppBar>
    )
}
