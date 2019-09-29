import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import moment from 'moment'
import Layout from '../components/Layout'
import { ExternalLink } from '../components/Icons';

import { externalPosts } from '../../data/externalPosts'

export default () => {
  const renderPosts = data => {
    let allPosts = []
    data.allFile.edges.forEach(post => {
      const normalizedPost = {
        title: post.node.childMarkdownRemark.frontmatter.title,
        path: post.node.childMarkdownRemark.frontmatter.path,
        publication: undefined,
        date: post.node.childMarkdownRemark.frontmatter.date,
      }
      allPosts.push(normalizedPost)
    })

    allPosts = allPosts.concat(externalPosts)

    allPosts.forEach(post => {
      post.sortOrder = moment(post.date, 'DD MMM YYYY').valueOf()
    })

    // Sort in descending order:
    allPosts.sort((a, b) => {
      return b.sortOrder - a.sortOrder
    })

    const commentDecoration = (
      <span aria-hidden="true">{String.fromCharCode(47) + String.fromCharCode(47) + String.fromCharCode(9)}</span>
    )

    return allPosts.map(post => {
      const renderLink = () => {
        if (post.publication) {
          return (
            <>
              <a href={post.path} target="_blank" rel="noopener noreferrer">
                {post.title}{' '}{ExternalLink}
              </a>
              <small className="publication">{commentDecoration}{post.publication}</small>
              <small className="date">{commentDecoration}{post.date}</small>
            </>
          )
        }

        return (
          <>
            <Link to={post.path}>{post.title}</Link>
            <small className="date">{commentDecoration}{post.date}</small>
          </>
        )
      }

      return (
        <article aria-label="" className="post" key={post.path}>
          {renderLink()}
        </article>
      )
    })
  }

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
            <h1>
              <span role="img" aria-label="" aria-hidden="true">
                💚
              </span>{' '}
              Things I've written:
            </h1>
            {renderPosts(data)}
          </main>
        </Layout>
      )}
    />
  )
}
