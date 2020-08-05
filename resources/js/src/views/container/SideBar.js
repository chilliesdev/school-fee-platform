import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import { Logo } from '../components'

export default function SideBar() {

  const [Collapsed, setCollapsed] = useState(true)

  function toggleCollapse(value) { 
    setCollapsed(value)
  }

  const SideBarList = ({ image, name, link="#" }) => <div className="list-item">
    <Link to={link}>
      <img className="icon" src={image}/>
      {!Collapsed && <span className="sidebar-text">{name}</span>}
    </Link>
  </div>

  return (
    <div 
      className={Collapsed ? "sidebar" : "sidebar open"} 
      onMouseEnter={() => toggleCollapse(false)}
      onMouseLeave={() => toggleCollapse(true)}
    >
      <Logo size={Collapsed ? "sm" : "lg"} />
      
      <SideBarList
       image="/svg/user.svg" 
       name="Profile"
      />
      <SideBarList
       image="/svg/transaction.svg" 
       name="Transactions"
      />
      <SideBarList
       image="/svg/marketing.svg" 
       name="Statistics"
      />
      <SideBarList
       image="/svg/gear.svg" 
       name="Options"
      />
    </div>
  )
}
