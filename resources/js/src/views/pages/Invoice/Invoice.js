import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Invoice({ location }) {
  console.log(location.invoiceData)

  return (
    <>{location.invoiceData 
      ? <h1>Invoice</h1>
      : <Redirect to="/"/>}
    </>
  )
}
