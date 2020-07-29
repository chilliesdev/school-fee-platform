import React from 'react'
import { Link } from 'react-router-dom'

export default props => <div className="container-fixed">
  <div className="navbar">
    <h1 className="logo">
      <a href="/">PayMySchoolFees</a>
    </h1>
    <ul>
      <li><a href="#">Services</a></li>
      <li><a href="#">Payments</a></li>
      <li><a href="#">Contact</a></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
</div>