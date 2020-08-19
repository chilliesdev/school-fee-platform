import React from "react"

// components
import Alert from "./Alert"

export default function Select({
  label,
  placeholder,
  icon,
  size = "",
  handleChange,
  name = null,
  error,
  disabled = false,
  options,
  rounded,
  newValue
  // if a value key is set the option value can be the changed
  // from the default id to the newValue prop passed
}) {
  return (
    <div className={`input-group ${size}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        ref={handleChange}
        disabled={disabled}
        className={rounded ? "select-rounded" : ""}
        defaultValue="placeholder"
      >
        {placeholder && <option disabled>{placeholder}</option>}
        {options
          ? options.map((option) => (
              <option key={option.id} value={option[newValue] || option.id}>
                {option.name}
              </option>
            ))
          : null}
      </select>
      {icon && <span className="input-icon">{icon}</span>}
      {error && <Alert message={error} type="error" />}
    </div>
  )
}
