import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import BgImage from '../components/BgImage'
import Layout from '../components/Layout'

export default () => {
  const renderProjects = data => (
    data.projects.edges.map(project => {
      let image = project.node.childMarkdownRemark.frontmatter.projectId;
      return (
        <article className="container--projects__project" key={project.node.childMarkdownRemark.frontmatter.path}>
          <BgImage
          css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
          style={{ position: `absolute` }}
          sizes={data[image].sizes}
          />
          <a title={project.node.childMarkdownRemark.frontmatter.title} href={project.node.childMarkdownRemark.frontmatter.path}>
            <h3 className="container--projects__project__title"><span>{project.node.childMarkdownRemark.frontmatter.title}</span></h3>
          </a>
        </article>
      )
    })
  )

  return (
    <StaticQuery
      query={graphql`
        query Projects {
          projects: allFile(
            filter: { sourceInstanceName: { eq: "projects" }, extension: { eq: "md" } }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    path
                    projectId
                  }
                }
              }
            }
          }
          cah: imageSharp(id: { regex: "/cah/" }){
            sizes(
              maxWidth: 900, 
              quality: 100, 
              duotone: {
                highlight: "#edfafa",
                shadow: "#4a00e0"
              }
            ) {
              ...GatsbyImageSharpSizes
            }
          }
          wam: imageSharp(id: { regex: "/mammoth/" }){
            sizes(
              maxWidth: 900, 
              quality: 100, 
              duotone: {
                highlight: "#edfafa",
                shadow: "#4a00e0"
              }
            ) {
              ...GatsbyImageSharpSizes
            }
          } 
          gallery: imageSharp(id: { regex: "/ogre/" }){
            sizes(
              maxWidth: 900, 
              quality: 100, 
              duotone: {
                highlight: "#edfafa",
                shadow: "#4a00e0"
              }
            ) {
              ...GatsbyImageSharpSizes
            }
          }
        }`
      }
      render={data => (
        <Layout>
          <main className="container container--projects">
            <Helmet title={`Jen Downs - Projects`} />
            {renderProjects(data)}
          </main>
        </Layout>
      )}
    />
  )
}