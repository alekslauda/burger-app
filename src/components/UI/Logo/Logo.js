import React from 'react';
import classes from './Logo.css';

// because webpack copy the image and then we work with the reference
import burgerLogo from '../../../assets/images/burger-logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    );
}

export default logo;