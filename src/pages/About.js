import React from 'react'
import {
    Grid,
    Button
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import myPhoto from '../assets/myphoto.jpg'
import Navbar from '../components/Navbar';

const useStyles = makeStyles(theme => ({
    about: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 50,
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#050505',
        '@media(max-width: 470px)': {
            justifyContent: 'flex-start',
            paddingLeft: 20,
            height: 350
        }
    },
    title: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 30,
        fontFamily: 'Alata, sans-serif',
        '@media(max-width: 470px)': {
            fontSize: 25
        }
    },
    description: {
        color: 'white', 
        maxWidth: 500,
        fontFamily: 'Alata, sans-serif',
        '@media(max-width: 470px)': {
            fontSize: 16,
            paddingRight: 20
        }
    },
    myPhoto: {
        backgroundImage: `url(${myPhoto})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '@media(max-width: 470px)': {
            minHeight: 400,
        }
    }
}))

function About() {
    const classes = useStyles();
    return (
        <div className="">
            <Navbar />
            <Grid container>
                <Grid className={classes.about} item xs={12} md={6}>
                    <h4 className={classes.title}>ABOUT US</h4>
                    <span className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae modi, libero dignissimos deleniti eveniet facilis laudantium harum laboriosam quidem! Dignissimos doloribus quam nulla obcaecati sequi, eaque alias. Ab, aperiam.</span>
                    <Button variant="contained" color="secondary" style={{width: 200, fontSize: 13, fontWeight: '500', fontFamily: 'Alata, sans-serif', marginTop: 20}} disableElevation>
                        Lihat Portofolio Saya
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} className={classes.myPhoto}>
                </Grid>
            </Grid>
        </div>
    )
}  

export default About
