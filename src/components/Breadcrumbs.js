import React from 'react'
import Link from 'gatsby-link'

const Breadcrumbs = props => {
  const sourceName = props.source[0].toUpperCase() + props.source.substr(1);
  return (
    <p className="breadcrumbs">
      <small>
        <Link to="/">Home</Link>
        <span>></span>
        <Link to={`/${props.source}`}>{sourceName}</Link>
        <span>></span>
        {props.data.frontmatter.title}
      </small>
    </p>
  ) 
}

export default Breadcrumbs