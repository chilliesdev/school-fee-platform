import React from 'react'

// components
import Alert from './Alert'

export default function Select ({ 
  label, 
  placeholder, 
  icon, 
  size = "", 
  handleChange,
  name = null,
  error,
  disabled = false,
  options,
}) { 
  return (
      <div className={`input-group ${size}`}>
        { label && <label htmlFor={name}>{label}</label>}
        <select
          name={name}
          ref={handleChange}
          disabled={disabled}
          defaultValue="placeholder"
        >
          <option value="placeholder" disabled>{placeholder}</option>
          {options ?
          options.map(({ id, name }) => 
            <option key={id} value={id}>{name}</option>
          ): null}
        </select>
        {icon && <span className="input-icon">{icon}</span>}
        {error && <Alert 
          message={error}
          type="error"
        />}
      </div>
    )
  }