/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header/header"
import "./layout.css"
import About from "./About/About"

const Layout = () => {

  return (
    <>
      <Header />
      <About/>
    </>
  )
}


export default Layout
