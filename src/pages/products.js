import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"

const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(query)
  const products = data.allContentfulProduct.nodes.map(item => {
    return (
      <div className="products__item" key={item.title}>
        <Image fluid={item.image.fluid} />
        <div className="products__info">
          <h2 className="products__title">{item.title}</h2>
          <div className="price">{item.price}</div>
        </div>
        <Link to={`/products/${item.slug}`}>More details</Link>
      </div>
    )
  })

  return (
    <div className="products">
      <Layout>
        <div className="container">
          <h2 className="products-page__title">Products</h2>
          <div className="products__wrap">{products}</div>
        </div>
      </Layout>
    </div>
  )
}
export default Products
