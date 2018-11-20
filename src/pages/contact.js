
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <h1><Header headerText="Contact" /></h1>
    <p>
      Send me a message!
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`