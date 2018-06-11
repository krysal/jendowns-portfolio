import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

export default function Template({ data }) {
  const { markdownRemark: post } = data; 
  return (
    <main className="container container--blog__post">
      <Helmet title={`Jen Downs - ${post.frontmatter.title}`} />
      <p><small><Link to="/">Home</Link> > <Link to="/projects">Projects</Link> > <strong>{post.frontmatter.title}</strong></small></p>
      <h1>{post.frontmatter.title}</h1>
    </main>
  );
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
}
`;