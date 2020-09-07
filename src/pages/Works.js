import React from 'react'
import { Grid, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import Navbar from '../components/Navbar';

const useStyles = makeStyles(theme => ({
    root: {
        height: '90vh',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        overflowX: 'hidden'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Alata, sans-serif',
    },
    description: {
        fontSize: 16,
        color: 'white',
        margin: '10px 0'
    },
    image: {
        width: 305,
        height: 305,
        '@media(max-width: 470px)': {
            width: '100%'
        }
    },
    left: {
        paddingLeft: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '@media(max-width: 470px)': {
            justifyContent: 'flex-start',
            paddingLeft: 20,
            paddingTop: 20,
            height: 200
        }
    },
    right: {
        display: 'flex',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        backgroundColor: 'white',
        '@media(max-width: 470px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    }
}))

function Works() {
    const classes = useStyles();
    return (
        <div className="">
            <Navbar />
            <div className={classes.root}>
                <Grid container>
                    <Grid className={classes.left} item xs={12} md={4}>
                        <span className={classes.title}>PORTOFOLIO</span>
                        <span className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure.</span>
                        <Button variant="contained" color="secondary" style={{width: 150}}>Works</Button>
                    </Grid>
                    <Grid className={classes.right} item xs={12} md={8}>
                        <img className={classes.image} src="https://source.unsplash.com/305x305" alt=""/>
                        <img className={classes.image} src="https://source.unsplash.com/305x306" alt=""/>
                        <img className={classes.image} src="https://source.unsplash.com/306x305" alt=""/>
                        <img className={classes.image} src="https://source.unsplash.com/307x306" alt=""/>
                        <img className={classes.image} src="https://source.unsplash.com/306x307" alt=""/>
                        <img className={classes.image} src="https://source.unsplash.com/307x308" alt=""/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Works
