import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import BgImage from '../components/BgImage';

export default function Template({ data }) {

  const projects = data.projects.edges.map(project => {
    let image = project.node.childMarkdownRemark.frontmatter.projectId;
    return (
      <article>
        <BgImage
        css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
        style={{ position: `absolute` }}
        sizes={data[image].sizes}
        />
        <Link to={project.node.childMarkdownRemark.frontmatter.path}>
            <h3><span>{project.node.childMarkdownRemark.frontmatter.title}</span></h3>
            <h4><span>blah</span></h4>
        </Link>
      </article>
    );
  });

  return (
    <main className="container container--projects">
      <Helmet title={`Jen Downs - Projects`} />
      {projects}
    </main>
  );
}

export const pageQuery = graphql`
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
}
`;