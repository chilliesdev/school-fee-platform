import React from 'react'

export default function Card({ figure, label }) {
  return (
    <div className="dashboard-card">
      <h3>{figure}</h3>
      <div className="line"></div>
      <h4>{label}</h4>
    </div>
  )
}
