import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/MenuOutlined';
import '../css/Header.css';
import YouTubeLogo from '../Asset/youtubelogo.png';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';

export default function Header() {

  const [inputSearch,setInputSearch]=useState('')

  return (
    <div className='header'>
      <div className='left_navbar'> 
      <MenuIcon sx={{fontSize:'3.2em'}}/>
      <Link to={'/'}><img className='Header_logo'  src={YouTubeLogo} alt='youtubelogo'/>
      </Link>
      </div>
      <div className='header_input'>
      <div className='search_bar'>
      <input defaultValue={inputSearch} className='search' placeholder='Abhishek Singh' onChange={(e)=>{setInputSearch(e.target.value)}}/>
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className='searchIcon'/>
      </Link>
      
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
