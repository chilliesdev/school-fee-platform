import React from "react"
import { Redirect } from "react-router-dom"

// conponents
import { Logo } from "../../components"

export default function Invoice({ location }) {
  console.log(location.invoiceData)

  const invoiceData = {}

  return (
    <>
      {invoiceData ? (
        <div className="invoice-container">
          <Logo size="sm" />
          <div className="watermark">PAID</div>
          <h2>School name schools</h2>
          <h3>SCHOOL FEE</h3>
          <h3>$10,000</h3>
          <h5>Student Name</h5>
          <p>ClassName</p>
          <p className="email">email@example.com</p>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}
