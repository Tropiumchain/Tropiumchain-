import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

export const About = () => {

    const classes = useStyles();

    return (
        <Grid container direction="row" className={classes.root} spacing={1}>
            <Grid item xs={0} sm={2} />

            <Grid item xs={12} sm={8} container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Card style={{ background: '#98ee99' }}>
                        <CardContent >

                            <Typography gutterBottom color="textSecondary" variant="h4" component="h2" >
                                How Tropium Chain Works
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Stake 5000 Tropium to become a node validator and be rewarded for taking your Rx!
                                <br />
                                <br />
                                For Medical Marijuana you can track the weight at your dispensary and earn tropium rewards for keeping the recommended weight over time.
                                <br />
                                <br />
                                After our pilot test pharmacy program starts only patietns from a doctor can Run validator Nodes or owners of a collective.
                                <br />
                                <br />
                                So if you want to be a validator and you dont take any medcations you need to stake your tokens by 9/25/2020
                                <br />
                                <br />
                                If your participate in the ICO you will be qualified for our ICO Drop if you hold 1 tropium token from the ICO you will be
                                airdropped 1 tropium. If you hold 100 you get 100 TRPM 1:1 ICO Airdrop.
                                <br />
                                <br />
                                If your Tropium node gets banned for abuse of medication please contact your doctor and have him restake tokens for you. If he does not want to continue to give you medication and unstakes your Tropium all your ROI rewards will be returned to a pool to use for future funding of the platform.
                                You will still have any rewards you have already earned and your initial 5,000 Tropium.
                                <br />
                                <br />
                                When funds go into the pool after a user is banned for missing too much weight in their bottle. The doctor will receive 50% of the Roi from staking the tokens.
                                And doctors can purchase an account with an eos account attached with the software for 250$ and 24 hour support.
                                <br />
                                <br />

                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Tropium Development</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Blockbase Integration Database Encrypted</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Tropium Chain Mainnet launch</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">ICO</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Validator Registration</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2020"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">ICO Airdrop</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2021"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Launch Program for Walgreens</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2021"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Payment plan for Tropium Chain Doctors</h4>

                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#338a3e', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #338a3e' }}
                                        date="2021"
                                    >
                                        <h4 className="vertical-timeline-element-subtitle">Phase 2 Onboard and Launch as many pharmacies as possible</h4>

                                    </VerticalTimelineElement>

                                </VerticalTimeline>

                            </Typography>
                            <br />
                            <hr />
                            <br />
                            <Typography gutterBottom color="textSecondary" variant="h5" component="h3" >
                                For Patients
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                1. Stake your Tropium <br />
                                2. Enter your information into our encrypted database <br />
                                3. Keep the weight at the recommended amount <br />
                                4. If you take too much you lose your ROI and require your doctor to stake TRPM for you.
                            </Typography>
                            <br />
                            <hr />
                            <br />
                            <Typography gutterBottom color="textSecondary" variant="h5" component="h3" >
                                For Doctors
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                1. Enter your Name, Id and EOS Account into the database <br />
                                2. You can view to see if a patient is taking medications on time <br />
                                3. You can Restake a patients TRPM if approved by you. After a patient takes Rx too much it will cancel the contract or have the
                                power to unstake at your discretion  <br />
                            </Typography>
                            <br />
                            <hr />
                            <br />
                            <Typography gutterBottom color="textSecondary" variant="h5" component="h3" >
                                Medical Marijuana
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                1. Enter information in the app. <br />
                                2. Stake Tropium <br />
                                3. Get Rewards <br />
                            </Typography>
                            <br />
                            <hr />
                            <br />
                            <Typography gutterBottom color="textSecondary" variant="h5" component="h3" >
                                Support
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                If you have any questions please ask them on telegram at t.me/Tropiumchain or email us at tropiumchain@gmail.com
                            </Typography>



                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
            <Grid item xs={0} sm={2} />

        </Grid>
    )
}
