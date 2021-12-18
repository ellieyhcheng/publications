import React from "react"
import { graphql, withPrefix } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"

const getAuthor = authors => {
  return authors.length > 1 ?
    authors.reduce((prev, curr, idx, arr) => prev + (idx < arr.length - 1 ? ", " : ", and ") + curr)
    :
    authors.length === 1 ?
      authors[0]
      :
      "";
};

export default function Home({ data }) {
  return <Layout>
    <SEO />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => (
        <div key={node.id} style={{ margin: "1.5rem 0 0.5rem", display: "flex" }}>
          <p style={{ margin: "0 1rem 0", fontWeight: "500" }}>
            [{data.allMarkdownRemark.edges.length - idx}]
          </p>
          <p>
            <a href={withPrefix(node.frontmatter.file.publicURL)} className="highlight" download>
              {node.frontmatter.title}
            </a>
            {". "}
            {getAuthor(node.frontmatter.author)}{". "}
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
            file {
              publicURL
            }
            author
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