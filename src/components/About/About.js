import * as React from "react"
import profile_photo from "../../images/profile-photo.jpg"
import { about, about_title, ang_blur, profile_div, about_body, skills, bio, tools, currently } from "./About.module.scss"

const About = () => {
  return (
    <div id="about" className={about}>
      <div className={about_title}>
        <h2>Baitemir</h2>
        <div className={profile_div}>
          <img src={profile_photo} alt="profile photo" />
          <div className={ang_blur}>
          </div>
        </div>
        <h2>Asanbaev</h2>
      </div>
      <div className={about_body}>
        <div className={skills}>
          <h3>Skills</h3>
          <span>JavaScript development</span>
          <span>ReactJS + Redux</span>
          <span>ReactJS + GatsbyJS</span>
          <span>Layout with Bootstrap and Sass</span>
        </div>
        <div className={bio}>
          <h3>Hi there</h3>
          <span>I'm Baitemir and I'm web developer. I build web-sites using ReactJS and GatsbyJS framefork. Also I'm always ready to learn new technologies and fields.</span>
        </div>
        <div className={tools}>
          <h3>Tools</h3>
          <span>Figma</span>
          <span>Git and GitHub</span>
          <span>Gatsby cloud and Netlify</span>
          <span>GraphQL and GraphiGL</span>
          <span>JS libraries</span>
        </div>
      </div>
      <div className={currently}>
        <details>
          <summary>Currently learning</summary>
          <span>
            <ul>
              <li>NodeJS</li>
              <li>WordPress CMS</li>
              <li>Gatsby's plugins</li>
              <li>Python/Django</li>
            </ul>
          </span>
        </details>
      </div>
    </div>
  );
}

export default About;