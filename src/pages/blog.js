import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {

  const posts = data.allMarkdownRemark.edges.map(post => {
    return (
      <article>
        <h3>{post.node.frontmatter.title}</h3>
        <small>{post.node.frontmatter.date}</small>
      </article>
    );
  });

  return (
    <main className="container container--blog">
      <Helmet title={`Jen Downs - Blog`} />
      {posts}
    </main>
  );
}

export const pageQuery = graphql`
query Posts {
    allMarkdownRemark {
     edges {
       node {
         frontmatter {
           title
           date
         }
       }
     }
   }
}
`;