import React from "react"
import Img from "gatsby-image"

class Index extends React.Component {
  render() {
    const images = this.props.data.allImageSharp.edges
    const duotone = this.props.data.duotone.resolutions
    const grayscale = this.props.data.grayscale.resolutions

    return (
      <div className="grid">

        <Img resolutions={duotone} />

        <Img resolutions={grayscale} />

        <Img resolutions={grayscale} />

        <Img resolutions={duotone} />

      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query ImageQuery {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 125, height: 125, rotate: 180) {
              src
            }
          }
        }
      }
    }
    duotone: imageSharp(id: { regex: "/donut.jpg/" }) {
      resolutions(
        duotone: { highlight: "#f5cedb", shadow: "#3c6df0" }
        width: 500
      ) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    grayscale: imageSharp(id: { regex: "/donut.jpg/" }) {
      resolutions(
        grayscale: true, 
        width: 500
      ) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
  }
`