import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Breadcrumbs from '../components/Breadcrumbs'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  console.log(
    '%c💁🏻 Hello there!',
    'color: #8971d0; font-size: 14px; font-weight: 700; padding: 4px; border: 2px solid #8971d0;'
  )
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} - Posts - Jen Downs~~`} />
      <main className="container container--blog__post">
        <Breadcrumbs source="posts" data={post} />
        <h1>{post.frontmatter.title}</h1>
        <small>
          <strong>Last updated: </strong>
          {post.frontmatter.date}
        </small>
        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
