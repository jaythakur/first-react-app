import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    console.log(props.ingredients[props.type]);
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                disabled={props.disabled}
                className={classes.Less} 
                onClick={props.removed}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
};

export default buildControl;