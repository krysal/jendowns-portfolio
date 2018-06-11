import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {

  const posts = data.allFile.edges.map(post => {
    return (
      <article>
        <h3>{post.node.childMarkdownRemark.frontmatter.title}</h3>
        <small>{post.node.childMarkdownRemark.frontmatter.date}</small>
      </article>
    );
  });

  return (
    <main className="container container--blog">
      <Helmet title={`Jen Downs - Projects`} />
      {posts}
    </main>
  );
}

export const pageQuery = graphql`
query Posts {
    allFile(
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  }
`;