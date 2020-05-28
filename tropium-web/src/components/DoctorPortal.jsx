import React, { useState } from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';

import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';


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


export const DoctorPortal = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div style={{ height: '100vh' }}>
            <Grid container direction="row" className={classes.root} spacing={1}>
                <Grid item xs={0} sm={2} />

                <Grid item xs={12} sm={8} container>
                    <Grid item xs={12} sm={12}>
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    Add New Patient(s)
                            </Typography>
                                <br />
                                <FormControl>

                                    <br />
                                    <TextField id="outlined-basic" label="First Name" color="secondary" variant="outlined" style={{ marginTop: '6px' }} />
                                    <TextField id="outlined-basic" label="Middle Name" color="secondary" variant="outlined" style={{ marginTop: '6px' }} />
                                    <TextField id="outlined-basic" label="Last Name" color="secondary" variant="outlined" style={{ marginTop: '6px' }} />
                                    <br />

                                    <FormControl>
                                        <InputLabel htmlFor="age-native-helper">Bottle Id</InputLabel>
                                        <NativeSelect
                                            value={state.age}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-helper',
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={10}>Rx #1 + Bottle 1</option>
                                            <option value={20}>Rx #2 + Bottle 2</option>
                                            <option value={30}>Rx #3 + Bottle 3</option>
                                        </NativeSelect>
                                        <FormHelperText id="my-helper-text">This field can be left blank until you receive your tropium chain smart bottles</FormHelperText>
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                        <InputLabel htmlFor="age-native-helper">Select Doctor</InputLabel>
                                        <NativeSelect
                                            value={state.age}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-helper',
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={10}>Dr. John Wick - ID : 1243843</option>
                                            <option value={20}>Dr. Bradley Cooper - ID : 23535969</option>
                                            <option value={30}>Dr. Sophie Turner - ID: 429454941</option>
                                        </NativeSelect>
                                        <FormHelperText id="my-helper-text">This field is required</FormHelperText>
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                        <InputLabel htmlFor="age-native-helper">Choose Pharmacy</InputLabel>
                                        <NativeSelect
                                            value={state.age}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-helper',
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={10}>24/7 Pharmacy, Atlantic Avenue</option>
                                            <option value={20}>Pharmacy Store, Pacific Avenue</option>
                                            <option value={30}>Your Pharmas, Regent Street</option>
                                        </NativeSelect>
                                        <FormHelperText id="my-helper-text">This field is required</FormHelperText>
                                    </FormControl>





                                    <br />
                                    <TextField id="outlined-basic" label="EOS Account Name" color="secondary" variant="outlined" />
                                    <br />
                                    <Button variant="contained" size="medium" color="secondary" style={{ color: 'white', marginBottom: '20px' }}>
                                        Add Patient
                                    </Button>

                                </FormControl>
                                <br />

                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={0} sm={2} />

                </Grid>
            </Grid>
        </div>
    )
}
