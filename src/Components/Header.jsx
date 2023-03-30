import React from 'react'
import MenuIcon from '@mui/icons-material/MenuOutlined';
import '../css/Header.css';
import YouTubeLogo from '../Asset/youtubelogo.png';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';

export default function Header() {

  return (
    <div className='header'>
      <div className='left_navbar'> 
      <h1>hiiiii</h1> 
      <MenuIcon sx={{fontSize:'3.2em'}}/>
      <img className='Header_logo'  src={YouTubeLogo} alt='youtubelogo'/>
      </div>
      <div className='header_input'>
      <div className='search_bar'>
      <input className='search' placeholder='Search'/>
      <SearchIcon className='searchIcon'/>
      </div>
      <MicIcon sx={{fontSize:'3.2em'}}/>
      </div>
      <div className='right_navbar'>
      <VideoCallOutlinedIcon className='video_call' sx={{fontSize:'3.2em'}}/>
      <NotificationsNoneOutlinedIcon className='notification' sx={{fontSize:'3.2em'}}/>
      <Avatar style={{display:'inline-flex'}} sx={{ bgcolor:'Purple' }}>AS</Avatar>
      </div>
    </div> 
  )
}
