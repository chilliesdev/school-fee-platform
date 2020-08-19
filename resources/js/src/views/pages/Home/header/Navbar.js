import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

// hooks
import { useScrollHandler } from "../../../../hooks"

// component
import { Button } from "../../../components"

// icons
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

export default function Navbar() {
  const atTop = useScrollHandler()
  const { pathname } = useLocation()

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(!menu)

  return (
    <div className={`navbar ${!atTop ? "at-top" : "not-at-top"}`}>
      <div className="nav-container">
        <h1 className="logo">
          <a href="/">PayMySchoolFees</a>
        </h1>
        <Button classes="menu-open" action={toggleMenu}>
          <FaBars />
        </Button>
        <ul className={`menu-container ${menu && "open"}`}>
          <li className="menu-close-icon">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                toggleMenu()
              }}
            >
              <IoMdClose />
            </a>
          </li>
          <li>
            <a className={"/" === pathname ? "active" : ""} href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className={"#services" === pathname ? "active" : ""}
              href="/#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={"#payments" === pathname ? "active" : ""}
              href="/#payments"
            >
              Payments
            </a>
          </li>
          <li>
            <a
              className={"#contact" === pathname ? "active" : ""}
              href="/#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <Link to="/dashboard">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
