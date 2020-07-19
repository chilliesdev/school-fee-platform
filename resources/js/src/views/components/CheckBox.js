import React from 'react'

export default function CheckBox ({ 
  label, 
  handleChange = null, 
  value,
  name = null,
  disabled = false
}) { 
  return (
    <div className='input-group checkbox'>
      <input 
        type='checkBox' 
        name={name}
        onChange={handleChange 
          ? () => handleChange()
          : null
        }
        checked={value ? 1 : 0}
        disabled={disabled}
      />
      {label && <label
        htmlFor={name}
        style={{
          display: 'inline'
        }}
      >{label}</label>}
    </div>
  )
}