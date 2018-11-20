import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Welcome to {data.site.siteMetadata.title}</h1>
    <div>
      <img
        src="https://www.nieuws.social/strategie_nieuws/wp-content/uploadsnieuwssocial/2018/10/eee-1.jpg"
        alt="Data Lemons: a blog about data for everyone"
      />
    </div>
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
