import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ size="lg" }) {
  return <h1 className={`logo ${size}`}>
    <Link to="/" className={size}>
      {size === "sm"
      ?"Pay"
      :"PayMySchoolFees"}
    </Link>
  </h1>
}
