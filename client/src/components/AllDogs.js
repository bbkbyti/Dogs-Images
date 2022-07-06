import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './AllDogs.module.css'
import { Link } from 'react-router-dom';


export default function AllDogs(props) {
    // const [breeds, setBreeds] = useState([]);

    const { breeds } = props;


    return (
        <div className={classes.breeds}>
            {breeds.map((breed) => (
                <div key={breed}>
                    <Link to={`/${breed}`}>
                        <h4>{breed}</h4>
                    </Link>
                </div>
            ))}
        </div>
    )
}
