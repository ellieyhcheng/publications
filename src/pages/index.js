import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"

export default function Home({ data }) {
  return <Layout>
    <SEO />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => (
        <div key={node.id} style={{ margin: "1.5rem 0 0.5rem", display: "flex" }}>
          <p style={{margin: "0 1rem 0", fontWeight: "500"}}>
            [{data.allMarkdownRemark.edges.length - idx}]
          </p>
          <p>
            {node.frontmatter.title}{". "}
            <i>In {node.frontmatter.conference}{". "}</i>
            {node.frontmatter.date}.
          </p>
        </div>
      ))}
    </div>
  </Layout>
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY")
            conference
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`