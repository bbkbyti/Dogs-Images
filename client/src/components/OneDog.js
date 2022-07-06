
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './OneDog.module.css';

export default function OneDog(props) {
    const [dog, setDog] = useState([]);

    const { breed } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`https://dog.ceo/api/breed/${breed}/images/random/3`);
                setDog(response.data.message)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [breed])
    return (
        <div>
            <Link className={classes.link} to='/'>
                <h2>Homepage</h2>
            </Link>
            <h1>Breed: {breed}</h1>
            {dog.map((d) => (
                <div key={d}>
                    <img className={classes.image} src={d} alt={breed} />
                </div>
            ))}
        </div>
    )
}
