const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/post.js`);

  return graphql(`{
    posts: allFile(
      filter: { extension: { eq: "md" } }
    ) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            frontmatter {
              path
            }
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.posts.edges.forEach(({ node }) => {

      if (node.sourceInstanceName === 'posts') {
        createPage({
          path: `${node.childMarkdownRemark.frontmatter.path}`,
          component: postTemplate,
          context: {}
        });
      }
    });
  });
}

