import React from "react"
import { Link } from 'gatsby'
import layoutStyles from "./layout.module.css"

const otherLinks = [
  {
    name: 'Github',
    link: 'https://github.com/ellieyhcheng/'
  },
  {
    name: 'Email',
    link: 'mailto:ellieyhc@gmail.com'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yu-hsi-ellie-cheng/'
  },
  { name: 'Resume', link: 'https://ellieyhcheng.github.io/YuHsi_Ellie_Cheng_Resume.pdf' },
]

export default function Layout({ children, data }) {
  return <div className={layoutStyles.layout}>
    <div className={layoutStyles.sidebar}>
      <h1>
        <a href="https://ellieyhcheng.github.io/">Ellie Cheng</a>
      </h1>
      <hr />
      <div className={layoutStyles.menuLinkWrapper}>
        {data ? (
          data && data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={layoutStyles.menuLink}>
              <Link to={node.fields.slug}>
                <p>{node.frontmatter.title}</p>
              </Link>
            </div>
          ))
        ) : (
          otherLinks.map(({ name, link }, i) => (
            <div key={i} className={layoutStyles.menuLink}>
              <a href={link}>{name}</a>
            </div>
          ))
        )}
      </div>
    </div>
    <div className={layoutStyles.content}>
      <div className={layoutStyles.header}>
        <div className={layoutStyles.title}>
          <h1>Publications</h1>
          <a href="https://scholar.google.com/citations?user=AtJkj-UAAAAJ"><h2>[Google Scholar]</h2></a>
        </div>
      </div>
      <hr />
      <div className={layoutStyles.text}>
        {children}
      </div>
    </div>
  </div>
}
