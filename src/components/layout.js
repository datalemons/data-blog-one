import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby" 
import "../components/styles.css"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 50%;
          padding: ${rhythm(1)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            className={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link to="/resources/" className="link">Resources</Link>
        <Link to="/contact/" className="link">Contact</Link>
        <Link to="/about/" className="link">About</Link>
        {children}
      </div>
    )}
  />
)
