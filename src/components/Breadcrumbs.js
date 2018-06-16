import React from 'react'
import Link from 'gatsby-link'

const Breadcrumbs = props => {
  const sourceName = props.source[0].toUpperCase() + props.source.substr(1);
  return (
    <p>
      <small>
        <Link to="/">Home</Link> > <Link to={`/${sourceName}`}>{sourceName}</Link> > {props.data.frontmatter.title}
      </small>
    </p>
  ) 
}

export default Breadcrumbs