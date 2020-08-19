import React from "react"

import Header from "./header"
import Services from "./services"
import Payment from "./payment"
import Navbar from "./header/Navbar"
import Footer from "./footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Services />
        <Payment />
        <Footer />
      </div>
    </>
  )
}
