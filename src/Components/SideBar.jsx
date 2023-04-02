import React, { useState } from 'react';
import '../css/SideBar.css';
import SideBarRow from './SideBarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function SideBar() {

   const [active,setActive]=useState(false);

  function activeHandler(data){
    setActive(data);
  }

  return (
    <div className='sidebar'>
      <SideBarRow active={active} icon=<HomeIcon/> title="Home" onHandler={activeHandler}/>
       <Link to={'/trending'}><SideBarRow active={active} icon=<WhatshotIcon/> title="Trending"  onHandler={activeHandler}/></Link>
      <SideBarRow active={active} icon=<SubscriptionsIcon/> title="Subscription"  onHandler={activeHandler}/>
      <hr></hr>
      <SideBarRow  icon=<VideoLibraryIcon/> title="Library"/>
      <SideBarRow icon=<HistoryIcon/> title="History"/>
      <SideBarRow icon=<OndemandVideoIcon/> title="Your videos"/>
      <SideBarRow icon=<WatchLaterIcon/> title="Watch Later"/>
      <SideBarRow icon=<ThumbUpAltIcon/> title="Like Video"/>
      <SideBarRow icon=<ExpandMoreIcon/> title="Show more"/>
      <hr/>
    </div>
  )
}
