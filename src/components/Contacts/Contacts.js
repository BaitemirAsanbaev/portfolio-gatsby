import { Link } from "gatsby";
import * as React from "react";
import { contacts } from "./Contacts.module.scss"
import email from "../../images/contacts-icons/email-icon.svg"
import github from "../../images/contacts-icons/github-icon.svg"
import linkedin from "../../images/contacts-icons/linkedin-icon.svg"
import instagram from "../../images/contacts-icons/instagram-icon.svg"
import telegram from "../../images/contacts-icons/telegram-icon.svg"


const Contacts = () => {
  return (
    <div id="contacts" className={contacts}>
      <div>
        <Link to="baitemir1706@gmail.com">
          <img src={email} alt="email" />
        </Link>

        <Link to="https://github.com/BaitemirAsanbaev">
          <img src={github} alt="github" />
        </Link>

        <Link to="https://www.linkedin.com/in/baitemir">
          <img src={linkedin} alt="linkedin" />
        </Link>

        <Link to="https://www.instagram.com/baitemir_dev/">
          <img src={instagram} alt="instagram" />
        </Link>

        <Link to="https://t.me/baitemir17">
          <img src={telegram} alt="telegram" />
        </Link>
      </div>
    </div>)
}

export default Contacts;