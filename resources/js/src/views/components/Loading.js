import React,{ useEffect } from 'react'
// components
import { CircularProgress } from '@material-ui/core'
// hooks
import { useBodyOverflow } from '../../hooks'

export default function Loading({ 
  color = 'primary', 
  size = 'sm',
  background = 'default' }) {

  const styles = () => 
    size === 'lg' 
    ? {
      height: '3rem',
      width: '3rem'
    } : {
      height: '1.3rem',
      width: '1.3rem'
    } 

  useEffect(() => {
    background === "full" && useBodyOverflow()
    return () => {
      useBodyOverflow("unset")
    }
  }, [background])

  const Spinner = () => <CircularProgress 
    style={styles()}
    className={`loading ${color} ${size}`} 
  />

  return background === 'full' 
  ? <div className="loading-bg">
    <Spinner/>
  </div>
  : <Spinner/>
}