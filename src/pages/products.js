import React from "react";
import {Link} from "gatsby"

export default function Products () {
  return (
    <div className="products">
      <h2>Products</h2>
      <ul className="main-menu">
        <Link to="/">Home</Link> <Link to="/blog">Blog</Link> <Link to="/products">Products</Link>
      </ul>
    </div>
  )
}
