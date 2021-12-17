import * as React from "react"
import { project } from "./SlideProject.module.scss"

const SlideProject = ({ img, title, link }) => {
  return (
    <div className={project}>
      <a rel="norefferer" target="_blank" href={link} style={{ backgroundImage: `url(${img})` }}>
      </a>
      <h2>{title}</h2>
    </div>

  );
}

export default SlideProject;