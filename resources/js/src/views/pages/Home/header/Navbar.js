import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

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
            <span>Menu</span>
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
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              to="payments"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Payments
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to="/dashboard">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
