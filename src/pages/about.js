import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/styles.css"

export default ({ data }) => (
  <Layout>
      <h1 className="header-title">About</h1>
        <p>
          Data Lemons is a data blog for everyone that talks about data, analyzes data, and discusses data analyses.
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

