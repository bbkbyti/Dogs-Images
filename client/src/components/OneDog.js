
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            {dog.map((d) => (
                <div key={d}>
                    <img src={d} alt={breed} />
                </div>
            ))}
        </div>
    )
}
