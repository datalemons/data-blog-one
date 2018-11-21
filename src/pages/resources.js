import React from "react" 
import styles from "../components/container.module.css" 
import "../components/styles.css"
import Container from "../components/container" 
import githubIcon from "../components/Octocat.png"
import Layout from "../components/layout"

console.log(styles)

const Resource = props => (
    <div className={styles.resource}>
        <img src={props.icon} className={styles.icon} alt="" />
        <div className={styles.description}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.annotation}>{props.annotation}</p>
        </div>
    </div>
)

export default () => (
    <Layout>
        <h1 className="header-title">Resources</h1>
        <p>A list of resources/tools that I use here at DataLemons.</p>
        <Container>
            <Resource
                name="Github"
                icon={githubIcon}
                annotation="used for version control"
            />

            <Resource
                name="Gatsby"
                icon="https://d3vv6lp55qjaqc.cloudfront.net/items/2I3j0w1l0U3U1m2e3V0Y/gatsby-1.png?X-CloudApp-Visitor-Id=d22306253b2403f4036586962222fd31&v=7dfa9c0a"
                annotation="powers this site"
            />
        </Container>
    </Layout>
)