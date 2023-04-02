import React from 'react'
import Avatar from '@mui/material/Avatar';
import '../css/videoCard.css'

export default function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail' src={image}/>
      <div className='video_info'>
      <div className='avatar_icon'>
      <Avatar className='videoCard_info' alt={channel} src={channelImage}></Avatar>
      </div>
      <div className='videoCard_text'>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} · {timestamp}</p>
      </div>
      </div>
    </div>

  )
}
