import React from "react"
import Layout from "../components/Layout/Layout";
import styles from "../components/modules/products.module.css";

export default function Products () {
  return (
    <Layout>
      <h2>Products</h2>
      <p className={styles.text}>Lorem some text for me</p>
    </Layout>
  )
}
