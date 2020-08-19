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
            <Link className={"/" === pathname ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={"#services" === pathname ? "active" : ""}
              to="#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={"#payments" === pathname ? "active" : ""}
              to="#payments"
            >
              Payments
            </Link>
          </li>
          <li>
            <Link
              className={"#contact" === pathname ? "active" : ""}
              to="#contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
