import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

import { externalPosts } from "../../data/externalPosts";

export default () => {
  const renderPosts = data =>
    data.allFile.edges.map(post => (
      <article
        aria-label={post.node.childMarkdownRemark.frontmatter.title}
        className="container--posts__box"
        key={post.node.childMarkdownRemark.frontmatter.path}
      >
        <Link to={post.node.childMarkdownRemark.frontmatter.path}>
          <h3>
            <span>{post.node.childMarkdownRemark.frontmatter.title}</span>
          </h3>
          <h4>
            <span>{post.node.childMarkdownRemark.frontmatter.date}</span>
          </h4>
          <div className="container--posts__box--right" />
          <div className="container--posts__box--bottom" />
        </Link>
      </article>
    ));

  const renderPublishedPosts = externalPosts =>
    externalPosts.map(post => (
      <article
        aria-label={post.title}
        className="container--posts__box"
        key={post.path}
      >
        <a href={post.path} target="_blank" rel="noopener noreferrer">
          <h3>
            <span>{post.title}</span>
          </h3>
          <h4>
            <span>{post.date}</span>
          </h4>
          <div className="container--posts__box--right" />
          <div className="container--posts__box--bottom" />
        </a>
      </article>
    ));

  return (
    <StaticQuery
      query={graphql`
        query Posts {
          allFile(
            filter: {
              sourceInstanceName: { eq: "posts" }
              extension: { eq: "md" }
            }
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
      `}
      render={data => (
        <Layout>
          <main className="container container--posts">
            <Helmet title={`Jen Downs - Posts`} />
            {renderPosts(data)}
            {renderPublishedPosts(externalPosts)}
          </main>
        </Layout>
      )}
    />
  );
};
