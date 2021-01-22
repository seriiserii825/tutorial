import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div className="single-product">
        <Link to="/products">go back to products</Link>
        <h1>Single product: {title}</h1>
        <article>
          <Image fixed={fixed} />
          <h1>{title}</h1>
          <h3>${price}</h3>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      image {
        fixed(width: 600) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
