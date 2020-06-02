import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import infographicsImage from '../tropium_infographics.png'

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

export const Homepage = ({ history }) => {

    const classes = useStyles();

    return (
        <Grid container direction="row" className={classes.root} spacing={1}>
            <Grid item xs={0} sm={2} />

            <Grid item xs={12} sm={8} container spacing={5}>
                <Grid item xs={12} sm={7}>
                    <Card style={{ background: '#98ee99' }}>
                        <CardContent >

                            <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                About Tropium Chain
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Tropium Chains mission is to help end the war on opiates peacefully by incentivizing members of society to take their medications responsibly.
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Here at Tropium Chain we have built custom prescription bottles that track the users coordinates via GPS it monitors and updates the weight of the contents in the bottles being able to tell if the user is actually taking the medication at the recommended times.
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                The software for Tropium Chain is Closed Source and Private. However it is connected to the Tropium Blockchain Which is a Private blockchain built using the EOS Public Blockchain to record users token ammounts on both a public and private system
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                The only personal information on the public chain gets turned into a number in the system that corresponds to the users current updated EOS wallet address. And all personal information is kept encrypted in our Private software storage and software Never for public use, it includes things like user name and token ammountsand the times they took or diddnt take their medications as well as corresponding eos addresses and if they have abused the medication the bottle will detect this.
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Users Can start staking Tropium with 5,000.000000 tropium being the ammount needed to receive staking rewards at 3% Roi Annually. This 5,000.00000 Tropium Chain Tokens also allows you to use your Tropium Smart Rx bottle as a node for our chain. Just by taking your medication on time you will receive an extra 5% staking bonus Roi annually. And you can use your Tropium for discounts at your local pharmacy on medication or other items. Or just sell your Tropium for EOS on Otb Trading platform for Eos blockchain. Or you can save up Tropium and take out a loan with a defi project.
                            </Typography>
                            <br />

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <br />
                        <img className={classes.media} src={infographicsImage} alt="Tropium Image" />
                        <br />

                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} style={{ margin: '10px' }}>
                    <Paper elevation={4} variant="outlined" style={{ background: '#98ee99', padding: '30px' }}>
                        <Grid container alignItems="center" justify="space-evenly" spacing={4}>

                            <Grid item xs={12} sm={12}>
                                <Typography variant="h6" color="textSecondary" component="h2">
                                    Click below to go to Patient Portal, Doctors Portal or MMJ Portal depending upon what applies to you.
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={12} direction="row" justify="center"
                                alignItems="center" spacing={2}
                            >
                                <Grid item xs={12} sm={4}>
                                    <Button color="secondary" variant="outlined" onClick={() => {
                                        history.push("/patientportal")
                                    }}>Patients Portal</Button>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Button color="secondary" variant="outlined" onClick={() => {
                                        history.push("/doctorportal")
                                    }}>Doctors Portal</Button>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Button color="secondary" variant="outlined" onClick={() => {
                                        history.push("/mmjportal")
                                    }}>MMJ Portal</Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} style={{ margin: '10px', padding: '10px' }}>
                    <Paper elevation={4} variant="outlined" style={{ background: '#98ee99', padding: '20px' }}>
                        <Grid container alignItems="center" justify="space-evenly" spacing={4} direction="column">
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" color="textSecondary" component="h2">
                                    Tropium Token Sales
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl>
                                    <TextField id="outlined-basic" type="number" color="secondary" label="Amount of EOS" variant="outlined" />
                                    <FormHelperText id="my-helper-text">0.25 EOS = 1 Tropium</FormHelperText>
                                    <br />
                                    <TextField id="outlined-basic" label="Referral Code" color="secondary" variant="outlined" />
                                    <br /><br />
                                    <Button variant="contained" size="medium" color="secondary" style={{ color: 'white', marginBottom: '20px' }}>
                                        Purchase Tropium
                                    </Button>

                                </FormControl>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>


            </Grid>
            <Grid item xs={0} sm={2} />

        </Grid>
    )
}
