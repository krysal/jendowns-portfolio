import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  console.log("%c💁🏻 Hello there!", "color: #8971d0; font-size: 14px; font-weight: 700; padding: 4px; border: 2px solid #8971d0;");
  return (
    <main className="container container--blog__post">
      <Helmet title={`Jen Downs - Posts - ${post.frontmatter.title}`} />
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