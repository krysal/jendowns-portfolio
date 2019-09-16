import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import moment from "moment";
import Layout from "../components/Layout";

import { externalPosts } from "../../data/externalPosts";

export default () => {
  const renderPosts = data => {
    let allPosts = []
    data.allFile.edges.forEach(post => {
      const normalizedPost = {
        title: post.node.childMarkdownRemark.frontmatter.title,
        path: post.node.childMarkdownRemark.frontmatter.path,
        publication: undefined,
        date: post.node.childMarkdownRemark.frontmatter.date
      };
      allPosts.push(normalizedPost);
    })

    allPosts = allPosts.concat(externalPosts)

    allPosts.forEach(post => {
      post.sortOrder = moment(post.date, "DD MMM YYYY").valueOf()
    })

    // Sort in descending order:
    allPosts.sort((a, b) => {
      return b.sortOrder - a.sortOrder;
    });

    return allPosts.map(post => {
      const renderLink = () => {
        if (post.publication) {
          return (
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
          );
        }

        return (
          <Link to={post.path}>
            <h3>
              <span>{post.title}</span>
            </h3>
            <h4>
              <span>{post.date}</span>
            </h4>
            <div className="container--posts__box--right" />
            <div className="container--posts__box--bottom" />
          </Link>
        );
      };

      return (
        <article
          aria-label={post.title}
          className="container--posts__box"
          key={post.path}
        >
          {renderLink()}
        </article>
      );
    });
  };

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
            <h1>Things I've written <span role="img" aria-label="woman">💁🏼‍♀️</span><span role="img" aria-label="pencil and paper">📝</span></h1>
            {renderPosts(data)}
          </main>
        </Layout>
      )}
    />
  );
};
