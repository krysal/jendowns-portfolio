import React from 'react'
import Link from 'gatsby-link'

const Breadcrumbs = props => {
  console.log(props);
  const sourceName = props.source[0].toUpperCase() + props.source.substr(1);
  return (
    <p>
      <small>
        <Link to="/">Home</Link> > <Link to={"/"+ props.source}>{sourceName}</Link> > {props.data.frontmatter.title}
      </small>
    </p>
  ) 
}

export default Breadcrumbs