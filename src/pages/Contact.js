import React from 'react' 
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid, Button, useMediaQuery} from '@material-ui/core';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Navbar from '../components/Navbar';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        width: '100%',
    },
    left: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        '@media(max-width: 470px)': {
            height: '80vh',
        }
    },
    leftContainer: {
        padding: '0 40px',
        '@media(max-width: 470px)': {
            paddingLeft: 20
        }
    },
    leftTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -1,
    },
    form: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        '@media(max-width: 470px)': {
            marginTop: 20
        }
    },
    input: {
        width: '40%',
        outline: 0,
        borderWidth: '0 0 2px',
        borderColor: 'red',
        marginRight: '8%',
        color: 'white',
        marginTop: 20,
        backgroundColor: 'transparent',
        '&::placeholder': {
            color: 'white'
        },
        '&::focus': {
            outline: 0,
        },
        '@media(max-width: 470px)': {
            width: '100%'
        }
    },
    textarea: {
        width: '100%'
    },
    map: {
        width: '100%',
        height: '100%'
    }
}))

function Contact({google}) {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width: 470px)');

    const mapStyles = {
        width: mobile ? '100%' : '50%',
        height: '100vh',
        '@media(max-width: 470px)': {
            width: '100%'
        }
    }
    return (
        <div>
            <Navbar />
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.left}>
                        <div className={classes.leftContainer}>
                            <span className={classes.leftTitle}>LET'S WORK TOGETHER PROJECTS JUST SEND ME EMAIL HERE</span>
                            <form className={classes.form}>
                                <input type="text" placeholder="Name" className={classes.input} />
                                <input type="email" placeholder="Email" className={classes.input} />
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className={clsx(classes.input,classes.textarea)}></textarea>
                                <Button color="secondary" variant="contained" style={{marginTop: 20}}>Submit</Button>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Map
                            google={google}
                            zoom={15}
                            style={mapStyles}
                            initialCenter={{ lat: -5.429368, lng: 119.439215}}
                            >
                            <Marker position={{ lat: -5.429368, lng: 119.439215}} />
                        </Map>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCY9rhKQL2of9BS_ZoDWy3iq5D2F1N2LY4'
  })(Contact);
