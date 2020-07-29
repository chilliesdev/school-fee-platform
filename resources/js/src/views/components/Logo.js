import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ size="lg" }) {
  return <h1 className="logo"><Link to="/" className={size}>PayMySchoolFees</Link></h1>
}
