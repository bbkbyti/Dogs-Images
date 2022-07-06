import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './AllDogs.module.css'
import { Link } from 'react-router-dom';


export default function AllDogs(props) {
    // const [breeds, setBreeds] = useState([]);

    const { breeds } = props;


    return (
        <div>
            <div className={classes.text}>
                <h3>When hear a dog's breed can't remember how it looks like?</h3>
                <h2>Just Click One To See !</h2>
            </div>
            <div className={classes.breeds}>
                {breeds.map((breed) => (
                    <div key={breed}>
                        <Link className={classes.link} to={`/${breed}`}>
                            <h4>{breed}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}
