import React from 'react'
import '../css/SideBar.css';
export default function SideBarRow({onHandler,active,icon,title}) {
 
  const handler=()=>{
  
    if(active===false)
    {
      onHandler(true);
    }
    else
    {
      onHandler(false);
    }

  }
 
  return (
    <div className={`sideBarRow ${active ? "selected":''}`} onClick={handler}>
        <p className='sideBarRow_icon' >{icon}</p>
        <h2 className='sideBarRow_tittle'>{title}</h2>
    </div>
  )
}
