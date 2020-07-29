import React from 'react'

export default function CheckBox ({ 
  label, 
  ref,
  name = null,
  disabled = false
}) { 
  return (
    <div className='input-group checkbox'>
      <input 
        type='checkBox' 
        name={name}
        ref={ref}
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