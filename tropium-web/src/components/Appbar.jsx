import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'


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

export const Appbar = () => {

    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appBarStyle}>
            <Toolbar>
                <Typography className={classes.typographyStyle}>

                    <Link to="/" style={{ color: 'white', marginRight: '30px', textDecoration: 'none', cursor: 'pointer', fontSize: '20px' }}>
                        Tropium Chain
                </Link>

                </Typography>
                <Link to="/about_us" style={{ color: 'white', marginRight: '30px', textDecoration: 'none', cursor: 'pointer' }}>
                    About Us
                </Link>

                <a href="https://t.me/Tropiumchain" target="_new" style={{ marginLeft: '10px', marginRight: '20px', textDecoration: 'none', color: 'white' }}>
                    {/* <Icon onClick={() => console.log('clicked icon')}>contact_support</Icon> */}
                    Telegram
                </a>

                <Button variant="outlined" style={{ color: '#338a3e', backgroundColor: 'white', margin: '0 20px' }}>
                    Login
                </Button>

            </Toolbar>
        </AppBar >
    )
}
