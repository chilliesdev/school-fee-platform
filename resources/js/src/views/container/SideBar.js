import React from 'react'

// components
import { Logo } from '../components'

export default function SideBar() {


  const SideBarList = ({ image, name, link="#" }) => <div className="list-item">
    <div className="icon">
      <a href={link}>
        <img src={image}/>
        <div className="sidebar-text">{name}</div>
      </a>
    </div>
  </div>

  return (
    <div className="sidebar">
      <Logo size="sm" />
      
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
