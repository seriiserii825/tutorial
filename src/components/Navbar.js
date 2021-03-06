import React from "react"
import {Link} from "gatsby"

export default function Navbar () {
  return (
    <>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
      </ul>
      <hr/>
    </>
  )
}
