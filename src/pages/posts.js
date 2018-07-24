import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

import { externalPosts } from '../../data/externalPosts';

export default function Template({ data }) {
  const posts = data.allFile.edges.map(post => {
    return (
      <article className="container--posts__box" key={post.node.childMarkdownRemark.frontmatter.path}>
        <Link to={post.node.childMarkdownRemark.frontmatter.path}>
          <h3><span>{post.node.childMarkdownRemark.frontmatter.title}</span></h3>
          <h4><span>{post.node.childMarkdownRemark.frontmatter.date}</span></h4>
          <div className="container--posts__box--right" />
          <div className="container--posts__box--bottom" />
        </Link>
      </article>
    )
  });

  const publishedPosts = externalPosts.map(post => {
    return (
      <article className="container--posts__box" key={post.path}>
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
          <div className="container--posts__box--right" />
          <div className="container--posts__box--bottom" />
        </a>
      </article>
    );
  });

  return (
    <main className="container container--posts">
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
              date
            }
          }
        }
      }
    }
  }
`;