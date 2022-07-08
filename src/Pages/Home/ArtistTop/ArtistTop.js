import React from 'react';
import './AristTop.css'


const ArtistTop = ({ audio }) => {
    return (
        <div className='songCard'>
            <img className='cardImg' src={audio.images?.coverart} alt="" />
            <p className='title'>Title:{audio.title} </p>
            {/* <audio controls src={audio.hub?.actions[1]?.uri}></audio> */}

        </div>
    );
};

export default ArtistTop;