import { ButtonGroup } from "@material-ui/core"

import React from 'react'

export default function Button ({ action=null, children, classes='', disabled=false, type="button" }){ 
  
  let moreClasses = classes
  if (disabled) moreClasses = `${classes} disabled`

  return <button
    disabled={disabled}
    type={type}
    className={`btn ${moreClasses}`} 
    onClick={e => {
      e.preventDefault()
      action && action() 
    }}
  >{children}</button>
}