import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import { Logo } from '../components'

export default function SideBar() {

  const path = "/dashboard"

  const [Collapsed, setCollapsed] = useState(true)

  function toggleCollapse(value) { 
    setTimeout(() => {
      setCollapsed(value)
    }, 350);
  }

  const SideBarList = ({ image, name, link="#" }) => <Link 
    to={path + link} 
    className="list-item">
      <img className="icon" src={image}/>
      {!Collapsed && <span className="sidebar-text">{name}</span>}
  </Link>

  return (
    <div 
      className={Collapsed ? "sidebar" : "sidebar open"} 
      onMouseEnter={() => toggleCollapse(false)}
      onMouseLeave={() => toggleCollapse(true)}
    >
      <Logo link={path} size={Collapsed ? "sm" : "lg"} />
      
      <SideBarList
       image="/svg/user.svg" 
       name="Profile"
       link="/school"
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
