import React from 'react'

// components
import Alert from './Alert'

export default function Input ({ 
  label, 
  placeholder, 
  type="text", 
  icon, 
  id = "",
  size = "", 
  // If controlled is true the conponent can be controlled 
  // with value and on change prop
  controlled = false,
  value = "",
  handleChange,
  name = null,
  error,
  disabled = false,
  rounded = false,
}) { 
  return (
      <div className={type === 'file' ? `input-group ${size} input-file-group` : `input-group ${size}`}>
        { label && <label htmlFor={name}>{label}</label>}
        {controlled ? <input 
          type={type} 
          name={name}
          id={id}
          placeholder={placeholder} 
          value={value}
          onChange={handleChange}
          className={rounded ? 'input-rounded' : null}
          disabled={disabled}
        />: <input 
          type={type} 
          name={name}
          id={name}
          placeholder={placeholder} 
          ref={handleChange}
          className={rounded ? 'input-rounded' : null}
          disabled={disabled}
        />}
        {icon && <span className="input-icon">{icon}</span>}
        {error && <Alert 
          message={error}
          type="error"
        />}
      </div>
    )
  }