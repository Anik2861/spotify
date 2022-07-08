import React from 'react';
import './AristTop.css'
import { useNavigate } from 'react-router-dom';


const ArtistTop = ({ audio }) => {
    const navigate = useNavigate('')

    const nevigateSongDetail = id => {
        console.log(id)
        navigate(`/details/${id}`)
    }
    return (
        <div className='songCard' onClick={() => nevigateSongDetail(audio?.key)}>
            <img className='cardImg' src={audio.images?.coverart} alt="" />
            <p className='title'>{audio.title} </p>
            <p className='subTitle'>{audio.subtitle} </p>
            {/* <audio controls src={audio.hub?.actions[1]?.uri}></audio> */}

        </div>
    );
};

export default ArtistTop;