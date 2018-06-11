import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

export default function Template({ data }) {
  const { markdownRemark: post } = data; 
  return (
    <main className="container container--blog__post">
      <Helmet title={`Jen Downs - ${post.frontmatter.title}`} />
      <p><small><Link to="/">Home</Link> > <Link to="/blog">Posts</Link> > <strong>{post.frontmatter.title}</strong></small></p>
      <h1>{post.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}

export const pageQuery = graphql`
query BlogPostByPath($path: String) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`;