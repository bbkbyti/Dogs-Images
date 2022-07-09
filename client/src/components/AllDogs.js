import React from 'react';
import classes from './AllDogs.module.css'
import Form from './Form'


export default function AllDogs(props) {

    const { breeds } = props;


    return (
        <div className={classes.all}>
            <div className={classes.text}>
                <h1 className={classes.welcome}>Wellcome to Dog Lot</h1>
                <h3>Where you can find images of all dog breeds</h3>
            </div>
            <div>
                <Form breeds={breeds} />
            </div>
        </div>
    )
}
