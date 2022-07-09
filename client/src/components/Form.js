import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import classes from './Form.module.css';
export default function Form(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchBreeds, setSearchBreeds] = useState([]);
    const breeds = props.breeds



    const changeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        setSearchBreeds(breeds.filter((breed) => {
            if (searchTerm === '') {
                return breed
            } else if (breed.toLowerCase().includes(searchTerm.toLowerCase())) {
                return breed
            }
        }))
    }, [breeds, searchTerm])

    return (
        <div>
            <form className={classes.form}>
                <input className={classes.input}
                    onChange={changeHandler}
                    type='text'
                    placeholder='Search a Dog Breed...'
                    value={searchTerm}
                />
            </form>
            <div className={classes.breeds} >
                {searchBreeds.map((breed) => (
                    <h4 className={classes.breed} key={breed}>
                        <Link className={classes.link} to={`/${breed}`}>
                            <span>{breed}</span>
                        </Link>
                    </h4>
                ))}
            </div>
        </div>
    )
}
