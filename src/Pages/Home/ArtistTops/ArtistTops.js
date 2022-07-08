import React, { useEffect, useState } from 'react';
import ArtistTop from '../ArtistTop/ArtistTop';
import './ArtistTops.css'

const ArtistTops = () => {
    const [audios, setAudio] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6f4956270mshb01e011e65423d1p15f391jsn01d5c107ba2f',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US', options)
            .then(response => response.json())
            .then(data => {
                setAudio(data.tracks)
                console.log(data.tracks)
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='mainContainer'>
            <div className='navContainer'>
                <h3 className='text-white'>home</h3>
                <h3 className='text-white'>Search</h3>
                <h3 className='text-white'>Your Library</h3>
            </div>
            <div className='songContainer'>
                <h2 className=''>Top tracks</h2>
                <div className='allSongs'>

                    {
                        audios.map(audio =>
                            <ArtistTop
                                key={audio._id}
                                audio={audio}
                            ></ArtistTop>)
                    }
                </div>
            </div>

        </div>

    );
};

export default ArtistTops;