import React from 'react'
import Bg from '../assets/bg-home.png';
import Navbar from '../components/Navbar'
import {makeStyles} from '@material-ui/styles';
import {
    Fab
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${Bg})`,
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 2
        }
    },
    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        maxWidth: 400,
        marginTop: 100,
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
    },
    textCareer: {
        fontWeight: 'bold',
        fontFamily: 'Alata, sans-serif',
        color: 'white',
        fontSize: 20,
        '@media(max-width: 470px)': {
            fontSize: 15,
        }
    },
    textBig: {
        fontSize: 100,
        fontFamily: 'Alata, sans-serif', 
        fontWeight: 'bold', 
        color: 'white', 
        letterSpacing: -5,
        "@media(max-width: 470px)": {
            letterSpacing: 0,
            fontSize: 50
        }
    },
    textDescription: {
        fontSize: 18,
        fontFamily: 'Alata, sans-serif',
        color: 'white',
        "@media(max-width: 470px)": {
            fontSize: 15
        }
    },
    socialContainer: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.content}>
                <span className={classes.textCareer}>WEB DEVELOPER & FULLSTACK</span>
                <span className={classes.textBig}>Coding</span>
                <span className={classes.textDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi</span>
            </div>
            <div className={classes.socialContainer}>
                <Fab size="small" style={{backgroundColor: 'black', marginRight: 10}}>
                    <FacebookIcon style={{color: 'grey'}} />
                </Fab>
                <Fab size="small" style={{backgroundColor: 'black',marginRight: 10}}>
                    <TwitterIcon style={{color: 'grey'}} />
                </Fab>
                <Fab size="small" style={{backgroundColor: 'black',marginRight: 10}}>
                    <InstagramIcon style={{color: 'grey'}} />
                </Fab>
                <Fab size="small" style={{backgroundColor: 'black',marginRight: 10}}>
                    <PinterestIcon style={{color: 'grey'}} />
                </Fab>
                <Fab size="small" style={{backgroundColor: 'black',}}>
                    <YouTubeIcon style={{color: 'grey'}} />
                </Fab>
            </div>
        </div>
    )
}

export default Home
