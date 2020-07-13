import React from 'react'

// components
import Alert from './Alert'

export default function Input ({ 
  label, 
  placeholder, 
  type="text", 
  icon, 
  size = "", 
  handleChange = null, 
  value,
  name = null,
  error,
  disabled = false
}) { 
  return (
      <div className={`input-group ${size}`}>
        { label && <label htmlFor={name}>{label}</label>}
        <input 
          type={type} 
          name={name}
          placeholder={placeholder} 
          onChange={handleChange 
            ? e => handleChange(e.target.value,e.target.name)
            : null
          }
          value={value}
          className={error ? 'input-error' : null}
          disabled={disabled}
        />
        <span className="input-icon">{icon}</span>
        {error && <Alert 
          message={error}
          type="error"
        />}
      </div>
    )
  }