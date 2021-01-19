import React from 'react';
import {Link} from "gatsby"

const errorPage = () => {
  return (
    <div>
      <h1>Page not found, go to <a href="/">Home</a></h1>
      <ul className="main-menu">
        <Link to="/">Home</Link> <Link to="/blog">Blog</Link> <Link to="/products">Products</Link>
      </ul>
    </div>
  );
};
export default errorPage;
