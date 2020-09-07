import React from 'react'
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
        marginRight: 20,
        marginBottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.2)',
        width: 200,
        height: 250,
        '@media(max-width: 470px)': {
            width: '80%',
            margin: 'auto',
            marginBottom: 10,
        }
    }
}))
function CardService({Icon, title, description}) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Icon />
            <span style={{color: 'white', fontFamily: 'Alata, sans-serif', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>{title}</span>
            <span style={{color: 'white', fontFamily: 'Alata, sans-serif', fontSize: 14}}>{description}</span>
        </div>
    )
}

export default CardService
