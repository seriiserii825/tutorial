import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/beach.jpeg"
import Image from "gatsby-image"
const getImages = graphql`
  {
    fixed: file(name: { eq: "desert" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(name: { eq: "ocean" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktop: file(name: { eq: "desktop" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <div className="images">
        <article className="single-image">
          <h2>Basic image</h2>
          <img src={img} alt="" />
        </article>
        <article className="single-image">
          <h2>Fluid image</h2>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </div>
      <Image fluid={data.desktop.childImageSharp.fluid} />
    </Layout>
  )
}
export default Images
