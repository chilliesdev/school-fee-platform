import React from 'react'
// components
import { CircularProgress } from '@material-ui/core'

export default function Loading({ color = 'primary', size = 'sm' }) {

  const styles = () => 
    size === 'lg' 
    ? {
      height: '3rem',
      width: '3rem'
    } : {
      height: '1.3rem',
      width: '1.3rem'
    }

  return <CircularProgress 
      style={styles()}
      className={`loading ${color} ${size}`} 
    />
}