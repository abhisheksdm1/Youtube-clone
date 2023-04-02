import React from 'react';
import '../css/channelRow.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ChannelRow({verified,image,Channel,sub,noOfVideos,description}) {
  return ( 
    <div className='ChannelRow'>
            <img className='channelRow_logo' src={image}></img>
            <div className='channelRow_text'>
                <h4>{Channel} {verified && <CheckCircleOutlineIcon/>}</h4>
                <p><span className='ChannelRow_subsNumber'>{sub} Subscribers · {noOfVideos} videos</span></p>
                <p>{description}</p>
            </div>
    </div>
  )
}
