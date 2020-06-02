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
        padding: '5px',
        marginTop: '2rem'
    }
})


export const DoctorPortal = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        eos_account_name: '',
        patient: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleEosBanChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    }

    const handlePatientchange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value
        })
    }

    return (
        <div style={{ height: '100%' }}>
            <Grid container direction="row" className={classes.root}>
                <Grid item xs={0} sm={1} />

                <Grid item xs={12} sm={10} container spacing={3} justify="space-evenly" alignItems="flex-start">

                    <Grid item xs={12} sm={8} container justify="center" alignItems="center" >
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    Add New Patient(s)
                            </Typography>
                                <br />
                                <FormControl>

                                    <br />
                                    <TextField id="outlined-basic" label="First Name" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Middle Name" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Last Name" color="secondary" variant="outlined" />
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

                                    <TextField id="outlined-basic" label="Date of Birth" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Email Address" color="secondary" variant="outlined" />
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


                    <Grid xs={12} sm={4} container item>
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    Add a Doctor
                            </Typography>
                                <br />
                                <FormControl>

                                    <br />
                                    <TextField id="outlined-basic" label="First Name" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Middle Name" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Last Name" color="secondary" variant="outlined" />
                                    <br />

                                    <TextField id="outlined-basic" label="Doctor Id" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="Email Address" color="secondary" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-basic" label="EOS Account Name" color="secondary" variant="outlined" />
                                    <br />
                                    <Button variant="contained" size="medium" color="secondary" style={{ color: 'white', marginBottom: '20px' }}>
                                        Add Doctor
                                    </Button>

                                </FormControl>
                                <br />

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item xs={12} sm={6} container justify="center" alignItems="center" >
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    Banned Users
                                </Typography>
                                <br />
                                <FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="age-native-helper">Select EOS Account Name</InputLabel>
                                        <NativeSelect
                                            value={state.eos_account_name}
                                            onChange={handleEosBanChange}
                                            inputProps={{
                                                name: 'eos_account_name',
                                                id: 'age-native-helper',
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={"EOS_ACCOUNT_1"}>EOS_ACCOUNT_1</option>
                                            <option value={"EOS_ACCOUNT_2"}>EOS_ACCOUNT_2</option>
                                            <option value={"EOS_ACCOUNT_3"}>EOS_ACCOUNT_3</option>
                                        </NativeSelect>
                                        <FormHelperText id="my-helper-text">This field can be left blank until you receive your tropium chain smart bottles</FormHelperText>
                                    </FormControl>
                                    <br />

                                    <br />
                                    <Button variant="contained" size="medium" style={{ color: 'white', marginBottom: '20px', backgroundColor: '#338a3e' }}>
                                        Stake
                                    </Button>
                                    <Button variant="contained" size="medium" color="secondary" style={{ color: 'white' }}>
                                        Unstake
                                    </Button>

                                </FormControl>
                                <br />

                            </CardContent>
                        </Card>


                    </Grid>

                    <Grid item xs={12} sm={6} container justify="center" alignItems="center" >
                        <Card style={{ background: '#98ee99' }}>
                            <CardContent >

                                <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                    My Patients
                                </Typography>
                                <br />
                                <FormControl>

                                    <FormControl>
                                        <InputLabel htmlFor="age-native-helper">Patient Details : EOS ACCOUNT | Bottle IDs</InputLabel>
                                        <NativeSelect
                                            value={state.patient}
                                            onChange={handlePatientchange}
                                            inputProps={{
                                                name: 'patient',
                                                id: 'age-native-helper',
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={"EOS_ACCOUNT_1 | Bottle Id 1"}>EOS_ACCOUNT_1 | Bottle Id 1</option>
                                            <option value={"EOS_ACCOUNT_2 | Bottle Id 2"}>EOS_ACCOUNT_2 | Bottle Id 2 </option>
                                            <option value={"EOS_ACCOUNT_3 | Bottle Id 3"}>EOS_ACCOUNT_3 | Bottle Id 3</option>
                                        </NativeSelect>
                                        <FormHelperText id="my-helper-text">This field can be left blank until you receive your tropium chain smart bottles</FormHelperText>
                                    </FormControl>
                                    <br />

                                </FormControl>
                                <br />

                            </CardContent>
                        </Card>


                    </Grid>





                </Grid>
                <Grid item xs={0} sm={1} />
            </Grid>
        </div>
    )
}
