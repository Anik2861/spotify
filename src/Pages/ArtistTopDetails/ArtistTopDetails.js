import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const ArtistTopDetails = () => {
    const { id } = useParams()

    const [audioDtails, setAudioDetails] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6f4956270mshb01e011e65423d1p15f391jsn01d5c107ba2f',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${id}`, options)
        .then(response => response.json())
        .then(data => {
            setAudioDetails(data)
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
    return (
        <div>
            <audio controls src={audioDtails.hub?.actions[1]?.uri}></audio>
        </div>
    );
};

export default ArtistTopDetails;