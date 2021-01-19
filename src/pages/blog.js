import React from "react";
import {Link} from "gatsby"

export default function Blog () {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <ul className="main-menu">
        <Link to="/">Home</Link> <Link to="/blog">Blog</Link> <Link to="/products">Products</Link>
      </ul>
    </div>
  )
}
