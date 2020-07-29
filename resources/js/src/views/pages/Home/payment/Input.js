import React from 'react'
import useForm from 'react-hook-form'

export default ({ label, placeholder, icon, size = "" }) => {
  return <div 
      className={`input-group ${size}`}
    >
    { label && <label>{label}</label>}
    <input placeholder={placeholder} />
    <span className="input-icon">{icon}</span>
  </div>
}