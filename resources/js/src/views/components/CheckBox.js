import React from "react"

export default function CheckBox({
  label,
  handleChange,
  name = null,
  disabled = false
}) {
  return (
    <div className="input-group checkbox">
      <input
        type="checkBox"
        id={name}
        name={name}
        ref={handleChange}
        disabled={disabled}
      />
      {label && (
        <label
          htmlFor={name}
          style={{
            display: "inline"
          }}
        >
          {label}
        </label>
      )}
    </div>
  )
}
