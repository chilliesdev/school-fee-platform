import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

// components
import { Logo, Button } from "../components"

// icons
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

export default function SideBar({ userType, profilePicture }) {
  const { pathname } = useLocation()

  const admin = [
    {
      image: "/svg/user.svg",
      name: "School",
      link: "/school",
      svg: true
    },
    {
      image: "/svg/logout.svg",
      name: "Logout",
      link: "/logout",
      svg: true
    }
  ]

  const school = [
    {
      image: profilePicture
        ? "/storage/" + profilePicture
        : "/images/default-school-img.png",
      name: "Profile",
      link: "/profile",
      svg: false
    },
    {
      image: "/svg/transaction.svg",
      name: "Transactions",
      link: "/transaction",
      svg: true
    },
    {
      image: "/svg/marketing.svg",
      name: "Statistics",
      link: "/statistics",
      svg: true
    },
    {
      image: "/svg/logout.svg",
      name: "Logout",
      link: "/logout",
      svg: true
    }
  ]

  const [collapse, setCollapse] = useState(false)

  function toggleSideBar(value) {
    if (value === "OPEN") {
      return setCollapse(true)
    } else if (value === "CLOSE") {
      return setCollapse(false)
    }

    setCollapse(!collapse)
  }

  const SideBarList = ({
    image,
    name,
    link = "#",
    currentPath,
    collapse,
    svg
  }) => (
    <Link
      to={link === "/logout" ? link : `/dashboard${link}`}
      className={`list-item ${`/dashboard${link}` === currentPath && "active"}`}
    >
      <img className={svg ? "icon svg" : "icon"} src={image} />
      {collapse && <span className="sidebar-text">{name}</span>}
    </Link>
  )

  return (
    <>
      <Button
        classes={collapse ? "open" : "closed"}
        id="sidebar-open-btn"
        action={toggleSideBar}
      >
        <span>{collapse ? <IoMdClose /> : <FaBars />}</span>
      </Button>
      <div
        className={collapse ? "sidebar open" : "sidebar"}
        onMouseEnter={() => toggleSideBar("OPEN")}
        onMouseLeave={() => toggleSideBar("CLOSE")}
      >
        <Logo link="/dashboard" size={collapse ? "lg" : "sm"} />
        {userType === "admin"
          ? admin.map(({ image, name, link, svg }, idx) => (
              <SideBarList
                key={idx}
                image={image}
                name={name}
                link={link}
                currentPath={pathname}
                collapse={collapse}
                svg={svg}
              />
            ))
          : school.map(({ image, name, link, svg }, idx) => (
              <SideBarList
                key={idx}
                image={image}
                name={name}
                link={link}
                currentPath={pathname}
                collapse={collapse}
                svg={svg}
              />
            ))}
      </div>
    </>
  )
}
