import React from "react"
import {Link} from "gatsby"

export default function Home () {
  return (
    <div className="home">
      <h1>Home page</h1>
      <ul className="main-menu">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/products">Products</Link>
      </ul>
    </div>
  )
}
