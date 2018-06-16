import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Template({ data }) {
  const { markdownRemark: post } = data; 
  return (
    <main className="container container--blog__post">
      <Helmet title={`Jen Downs - ${post.frontmatter.title}`} />
      <Breadcrumbs source="posts" data={post} />
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