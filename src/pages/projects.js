import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import BgImage from '../components/BgImage';

export default function Template({ data }) {

  const projects = data.projects.edges.map(project => {
    return (
        <article>
          <BgImage
          css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
          style={{ position: `absolute` }}
          sizes={data.imageSharp.sizes}
          />
          <Link to={project.node.childMarkdownRemark.frontmatter.path}>
              <h3><span>{project.node.childMarkdownRemark.frontmatter.title}</span></h3>
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
          }
        }
    }
  }
  imageSharp(id: { regex: "/cah/" }) {
      sizes(maxWidth: 900, quality: 100, duotone: {
        highlight: "#e06359",
        shadow: "#2f195f"
      }) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        ...GatsbyImageSharpSizes
      }
    }
  }
}
`;