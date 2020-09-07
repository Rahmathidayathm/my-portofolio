import React from 'react'
import {
    Grid
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Bg from '../assets/services-bg.JPG';
import Navbar from '../components/Navbar';
import CardService from '../components/CardService';
import {useDataLayerValue} from '../DataLayer';

const useStyles = makeStyles(theme => ({
    root: {
        height: '110vh',
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '@media(max-width: 470px)': {
            height: 'auto',
        }
    },
    servicesLeft: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        '@media(max-width: 470px)': {
            height: 'auto',
            paddingTop: 20,
        }
    },
    servicesLeftTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Alata, sans-serif',
        letterSpacing: -0.5,
    },
    servicesLeftDescription: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Alata, sans-serif',
        marginTop: 10
    },
    serviceContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 50,
    }
}))

function Services() {
    const classes = useStyles();
    const [{services}, dispatch] = useDataLayerValue();
    return (
        <div className={classes.root}>
            <Navbar />
            <Grid container>
                <Grid className={classes.servicesLeft} item xs={12} md={4}>
                    <span className={classes.servicesLeftTitle}>SERVICES</span>
                    <span className={classes.servicesLeftDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil.</span>
                </Grid>
                <Grid className={classes.serviceContainer} item xs={12} md={8}>
                    {services.map((service, index) => (
                        <CardService key={index} Icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Services
