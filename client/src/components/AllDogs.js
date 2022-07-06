import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllDogs() {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios('https://dog.ceo/api/breeds/list/all');
                setBreeds(Object.keys(response.data.message));
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {breeds.map((breed) => (
                <div key={breed}>
                    <h4>{breed}</h4>
                </div>
            ))}
        </div>
    )
}
