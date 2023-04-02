import React from 'react';
import '../css/videoRow.css';

export default function VideoRow({views,image,channel,title,subs,description,timestamp}) {
  return (
    <div className='videoRow'>
      <img src={image} alt="channel_video"/>
      <div className='videoRow_text'>
        <h3>{title}</h3>
        <p className='videoRow_headline'>
        <span className='videoRow_subsNumber' >{channel} ·{subs} Subscribers {views} · {timestamp}</span>
        </p>
        <p className='videoRow_description'>{description}</p>
      </div>
    </div>
  )
}
