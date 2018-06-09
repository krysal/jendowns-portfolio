import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  console.log(data); // eslint-disable-link
  const { markdownRemark: post } = data; 
  return (
    <main className="container container--blog__post">
      <Helmet title={`Jen Downs - ${post.frontmatter.title}`} />
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