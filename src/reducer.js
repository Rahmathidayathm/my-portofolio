import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import CreateIcon from '@material-ui/icons/Create';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FiberNewIcon from '@material-ui/icons/FiberNew';

export const initialState = {
    services: [
        {
            icon: function() {
                return <WebIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'INTERFACE DESIGN',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
        {
            icon: function() {
                return <CreateIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'THEMES DEVELOPMENT',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
        {
            icon: function() {
                return <StorefrontIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'CONTENT MARKETING',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
        {
            icon: function() {
                return <StayCurrentPortraitIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'MOBILE APPS',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
        {
            icon: function() {
                return <DirectionsBikeIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'RESPONSIVE DESIGN',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
        {
            icon: function() {
                return <FiberNewIcon fontSize="large" style={{fontSize: 50}} color="secondary" />
            },
            title: 'FREE UPDATES',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eveniet.'
        },
    ]
}

const reducer = (action, state) => {
    return state;
}

export default reducer;