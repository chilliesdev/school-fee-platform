import React from 'react'

export default function Button ({ action, children, classes }){ 
  return <a 
    className={`btn ${classes}`} 
    href=""
    onClick={e => {
      e.preventDefault()
      action() }}
  >{children}</a>
}