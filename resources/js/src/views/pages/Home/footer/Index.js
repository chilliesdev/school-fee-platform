import React from "react"
import Title from "./Title"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Link as ScrollLink } from "react-scroll"

export default function Index(props) {
  return (
    <footer>
      <ul>
        <li>
          <Title>About</Title>
          <div className="footer-texts" id="contact">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter
          </div>
        </li>

        <li>
          <Title>Navigation</Title>
          <ul className="footer-nav">
            <li className="footer-texts">
              <ScrollLink
                // activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                Home
              </ScrollLink>
            </li>
            <li className="footer-texts">
              <ScrollLink
                // activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </ScrollLink>
            </li>
            <li className="footer-texts">
              <ScrollLink
                // activeClass="active"
                to="payments"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Payments
              </ScrollLink>
            </li>
          </ul>
        </li>

        <li>
          <Title>Social Media</Title>
          <div className="social-icons">
            <span>
              <a href="#">
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a href="#">
                <FaTwitter />
              </a>
            </span>
            <span>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </li>

        <li>
          <Title>Contact</Title>
          <ul>
            <li className="footer-texts">
              #No, Street Name. Town, Local Govt, State, Country
            </li>
            <li className="footer-texts">Tel: (+234) 0801 - 234 -5678</li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}
