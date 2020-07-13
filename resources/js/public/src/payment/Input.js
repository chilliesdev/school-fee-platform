import React from 'react'

export default ({ label, placeholder, icon, size = "" }) => <div 
    className={`input-group ${size}`}
  >
  { label && <label>{label}</label>}
  <input placeholder={placeholder} />
  <span className="input-icon">{icon}</span>
</div>