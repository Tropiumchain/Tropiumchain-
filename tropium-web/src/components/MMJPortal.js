import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        color: '#FFF',
        padding: '10px',
        marginTop: '2rem'
    },
    media: {
        maxWidth: '95%',
        height: 'auto',
        objectFit: 'cover'
    },
})

function generate(element) {
    return [0, 1, 2, 4].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export const MMJPortal = () => {

    const classes = useStyles();

    return (
        <div style={{ height: '100%' }}>
            <Grid container direction="row" className={classes.root} spacing={1}>
                <Grid item xs={0} sm={1} />

                <Grid item xs={12} sm={10} container spacing={5}>

                    <Grid item xs={12} sm={6}>
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    MMJ Portal
                                </Typography>
                                <br />
                                <Typography variant="h6" color="textSecondary" component="h6">
                                    EOS Account Name : tropium111111
                            </Typography>
                                <br />
                                <Typography variant="h6" color="textSecondary" component="h6">
                                    Total Tropium Amount
                                    <br />
                                    Liquid Balance : 1000.0000
                                    <br />
                                    Total Balance : 500.0000
                                </Typography>
                                <br />
                                <Typography variant="h6" color="textSecondary" component="h6">
                                    <br />
                                    Tropium Staked : 100.0000
                                    <br />
                                    Tropium Rewarded ROI : 7.50%
                                    <br />
                                </Typography>
                                <br />
                                <Typography variant="h4" color="textSecondary" component="h4">
                                    <br />
                                    Rewards Distributed
                                    <br />
                                </Typography>

                                <List dense="true">
                                    {generate(
                                        <ListItem>
                                            <ListItemText
                                                primary="10 Tropium"
                                                secondary="10:00 - May 27 2020"
                                            />
                                        </ListItem>,
                                    )}
                                </List>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                    >

                        <Grid item xs={12} sm={12}>
                            <Paper elevation={4} variant="outlined" style={{ background: '#98ee99', padding: '10px' }}>
                                <Grid container alignItems="center" justify="space-evenly" spacing={4} direction="column">
                                    <Grid item xs={12} sm={12} alignItems="center" justify="center">
                                        <Typography variant="h4" color="textSecondary" component="h2">
                                            Staking
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <FormControl>
                                            <TextField id="outlined-basic" type="number" color="secondary" label="Amount of Tropium" variant="outlined" />
                                            <br />
                                            <br />
                                            <Button variant="contained" size="medium" color="secondary" style={{ color: 'white', marginBottom: '20px' }}>
                                                Stake Tropium
                                    </Button>

                                        </FormControl>

                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid xs={12} sm={12} item>

                            <Paper elevation={4} variant="outlined" style={{ background: '#98ee99', padding: '10px' }}>
                                <Grid container alignItems="center" justify="space-evenly" spacing={4} direction="column">
                                    <Grid item xs={12} sm={12} alignItems="center" justify="center">
                                        <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                            Add New Account
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <FormControl>
                                            <TextField id="outlined-basic" label="EOS Account Name" color="secondary" variant="outlined" />
                                            <br />
                                            <TextField id="outlined-basic" label="First Name" color="secondary" variant="outlined" />
                                            <br />
                                            <TextField id="outlined-basic" label="Middle Name" color="secondary" variant="outlined" />
                                            <br />
                                            <TextField id="outlined-basic" label="Last Name" color="secondary" variant="outlined" />
                                            <br />

                                            <TextField id="outlined-basic" label="Bottle Id" color="secondary" variant="outlined" />
                                            <br />
                                            <TextField id="outlined-basic" label="Rx Id" color="secondary" variant="outlined" />
                                            <br />
                                            <TextField id="outlined-basic" label="Name of Strain + Dose Amount" color="secondary" variant="outlined" />
                                            <br />
                                            <Button variant="contained" size="medium" color="secondary" style={{ color: 'white', marginBottom: '20px' }}>
                                                Add Account
                                            </Button>

                                        </FormControl>

                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Paper elevation={4} variant="outlined" style={{ background: '#98ee99', padding: '15px' }}>
                            <Typography gutterBottom color="textSecondary" variant="h6" component="h2" >
                                Your node will earn rewards as long as your weight is correct. If more weight is taken out then prescribed, You will lose your
                                tropium rewards, contact your doctor to restake your tokens.
                            </Typography>
                        </Paper>
                    </Grid>



                </Grid>
                <Grid item xs={0} sm={1} />
            </Grid>
        </div>
    )
}
