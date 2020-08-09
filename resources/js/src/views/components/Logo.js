import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ size="lg", link="/" }) {
  return <h1 className={`logo ${size}`}>
    <Link to={link} className={size}>
      {size === "sm"
      ?"Pay"
      :"PayMySchoolFees"}
    </Link>
  </h1>
}
