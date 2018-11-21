import React from "react"
import { Link} from "gatsby"
import profileIcon from "./profile-pic-1a.jpeg"
import { rhythm } from "../utils/typography"
import "../components/styles.css"

class Bio extends React.Component {
    
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profileIcon}
          alt={`Kha-Ai Tran`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(1),
            height: rhythm(1),
          }}
        />
        <p>
          Written by <strong><Link to="/about" className="link-in-text">Kha-Ai Tran</Link></strong>. {' '}
        </p>
      </div>
    )
  }
}

export default Bio