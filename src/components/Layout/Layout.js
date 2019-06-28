import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import classes from './Layout.css'

const layout = props => {
    return (<Aux>
        <div>Navbar, menu</div>
        <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default layout;
