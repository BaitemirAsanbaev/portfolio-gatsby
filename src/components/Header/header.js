import * as React from "react"
import { Link } from "gatsby"
import { header, nav, span, img } from "./header.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import about_icon from "../../images/about-icon.svg"
import projects_icon from "../../images/projects-icon.svg"
import contacts_icon from "../../images/contacts-icon.svg"

const Header = () => (
  <header className={header}>
    <nav className={nav}>
      <ul>
        <li><Link to="#about">
          <span className={span}>About</span>
          <img className={img} width="50px" alt="about" src={about_icon} />
        </Link></li>
        <li><Link to="#portfolio">
          <span className={span}>Projects</span>
          <img className={img} width="50px" alt="projects" src={projects_icon} />
        </Link></li>
        <li><Link to="contacts">
          <span className={span}>Contacts</span>
          <img className={img}width="50px" alt="contacts" src={`${contacts_icon}`} />
        </Link></li>
      </ul>
    </nav>
  </header>
)


export default Header
