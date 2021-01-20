import React from "react"
import Layout from "../components/Layout/Layout";
import {graphql} from "gatsby";

function Examples ({data}) {
  const {
    site: {
      siteMetadata: {
        author,
        title
      }
    }
  } = data;
  return (
    <Layout>
      <h1>Example page for me</h1>
      <h2>{author}</h2>
      <h3>{title}</h3>
    </Layout>
  )
}

export const data = graphql`
query {
  site {
    siteMetadata {
      data
      description
      author
      title
      person {
        age
        name
      }
    }
  }
}
`
export default Examples;
