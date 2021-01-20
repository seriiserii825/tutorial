import React from "react"
import Layout from "../components/Layout/Layout";
import {ExampleButton} from "../components/styled-components/button";
import Header from "../exapmles/Header";

export default function Home () {
  return (
    <Layout>
      <h1>Example page</h1>
      <Header/>
      <ExampleButton>Some buttons</ExampleButton> </Layout>
  )
}
