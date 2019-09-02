import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Breadcrumbs from '../components/Breadcrumbs'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`Jen Downs - Projects - ${post.frontmatter.title}`} />
      <main className="container container--blog__post">
        <Breadcrumbs source="projects" data={post} />
        <h1>{post.frontmatter.title}</h1>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
query ProjectByPath($path: String) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
    }
  }
}`