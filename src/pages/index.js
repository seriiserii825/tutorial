import React from "react"
import Layout from "../components/Layout/Layout";
import {ExampleButton} from "../components/styled-components/button";

export default function Home () {
  return (
    <Layout>
      <h1>Home page</h1>
      <ExampleButton>Some buttons</ExampleButton>
    </Layout>
  )
}
