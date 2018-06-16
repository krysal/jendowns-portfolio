import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

import { externalPosts } from './posts/externalPosts.js';

export default function Template({ data }) {
  const posts = data.allFile.edges.map(post => {
    return (
      <article key={`post-`+Math.random() * (1000 - 1) + 1}>
        <Link to={post.node.childMarkdownRemark.frontmatter.path}>
          <h3><span>{post.node.childMarkdownRemark.frontmatter.title}</span></h3>
          <h4><span>{post.node.childMarkdownRemark.frontmatter.date}</span></h4>
          <div className="left" />
          <div className="bottom" />
        </Link>
      </article>
    )
  });

  const publishedPosts = externalPosts.map(post => {
    return (
      <article key={`post-`+Math.random() * (1000 - 1) + 1}>
        <a href={post.path}>
          {post.publication !== null &&
            <h3>
              <span>{post.publication}</span>
            </h3>
          }
          <h3>
            <span>{post.title}</span>
          </h3>
          <h4><span>{post.date}</span></h4>
          <div className="left" />
          <div className="bottom" />
        </a>
      </article>
    );
  });

  return (
    <main className="container container--blog">
      <Helmet title={`Jen Downs - Posts`} />
      {posts}
      {publishedPosts}
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