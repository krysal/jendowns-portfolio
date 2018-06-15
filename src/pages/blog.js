import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {

  const posts = data.allFile.edges.map(post => {
    return (
      <article>
        <a href="#">
          <h3><span>{post.node.childMarkdownRemark.frontmatter.title}</span></h3>
          <h4><span>{post.node.childMarkdownRemark.frontmatter.date}</span></h4>
          <div className="left" />
          <div className="bottom" />
        </a>
      </article>
    );
  });

  return (
    <main className="container container--blog">
      <Helmet title={`Jen Downs - Projects`} />
      {posts}
      <article>
        <a href="#">
          <h3><span>This is an article</span></h3>
          <h4><span>date</span></h4>
          <div className="left" />
          <div className="bottom" />
        </a>
      </article>
      <article>
        <a href="#">
          <h3><span>Another one</span></h3>
          <h4><span>date</span></h4>
          <div className="left" />
          <div className="bottom" />
        </a>
      </article>
      <article>
        <a href="#">
          <h3><span>Check out these WORDS</span></h3>
          <h4><span>date</span></h4>
          <div className="left" />
          <div className="bottom" />
        </a>
      </article>
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
              date(formatString: "DD MMMM YYYY", locale: "en")
            }
          }
        }
      }
    }
  }
`;