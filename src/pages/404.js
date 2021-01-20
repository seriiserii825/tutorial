import React from 'react';
import Layout from "../components/Layout/Layout";

const errorPage = () => {
  return (
    <Layout>
      <h1>Page not found, go to <a href="/">Home</a></h1>
    </Layout>
  );
};
export default errorPage;
