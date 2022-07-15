
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './OneDog.module.css';

export default function OneDog() {
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
            <div className={classes.header}>
                <Link className={classes.link} to='/'>
                    <span className={classes.home}>Dog Lot</span>
                </Link>
            </div>
            <div className={classes.container}>
                {dog.map((d) => (
                    <div className={classes.images} key={d}>
                        <img className={classes.image} src={d} alt={breed} />
                    </div>
                ))}
                <p className={classes.breed}>{breed}</p>
            </div>
        </div>
    )
}
