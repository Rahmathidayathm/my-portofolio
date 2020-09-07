import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {
    useMediaQuery
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    appBar: {
        height: '10vh',
        padding: '0 20px',
        backgroundColor: '#000',
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    brand: {
        fontFamily: 'Balsamiq Sans',
        fontWeight: 'bold', 
        textDecoration: 'none', 
        color: 'white', 
        fontSize: '2vw',
        "@media(max-width: 470px)": {
             fontSize: 25
        }
    },
    linkContainer: {
        display: 'flex',
        minWidth: '40%',
        listStyle: 'none',
        justifyContent: 'space-between',
        '@media(max-width: 470px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100vh',
            zIndex: 4,
            transform: 'translateX(100%)',
            /*opacity: 0,*/
            transition: 'all 1s',
        }
    },
    linkContainerMobile: {
        listStyle: 'none',
        minWidth: 0,
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
        zIndex: 4,
        transform: 'translateX(0%)',
        /*opacity: 0,*/
        transition: 'all 1s',
    },
    menuIcon: {
        display: 'none',
        textDecoration: 'none',
        '@media(max-width: 470px)': {
            display: 'inherit',
            position: 'relative',
            zIndex: 999999
        }
    }
}))

function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.appBar}>
            <h4><Link className={classes.brand} to="/">Rahmat</Link></h4>
            <ul className={open ? classes.linkContainerMobile : classes.linkContainer}>
                <li><Link to="/" style={{textDecoration: 'none', color: 'white', textTransform: 'uppercase',fontFamily: 'Alata, sans-serif', position: 'relative', zIndex: 5 }}>Home</Link></li>
                <li><Link to="/about" style={{textDecoration: 'none', color: 'white',textTransform: 'uppercase',fontFamily: 'Alata, sans-serif', }}>About</Link></li>
                <li><Link to="/services" style={{textDecoration: 'none', color: 'white',textTransform: 'uppercase',fontFamily: 'Alata, sans-serif', }}>Services</Link></li>
                <li><Link to="/works" style={{textDecoration: 'none', color: 'white',textTransform: 'uppercase',fontFamily: 'Alata, sans-serif'}}>Works</Link></li>
                <li><Link to="/contact" style={{textDecoration: 'none', color: 'white',textTransform: 'uppercase',fontFamily: 'Alata, sans-serif', }}>Contact</Link></li>
            </ul>
            <a href="#" onClick={handleClick} className={classes.menuIcon}>
                {open ? <CloseIcon style={{color: 'white'}} fontSize="large" /> : <MenuIcon fontSize="large" style={{color: 'white'}} /> }
            </a>
        </div>
    )
}

export default Navbar
