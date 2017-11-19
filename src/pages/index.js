import React from "react"
import Image from "gatsby-image"
import BgImage from "../components/bgImage.js"

class Index extends React.Component {
  render() {
    const images = this.props.data.allImageSharp.edges

    const duotoneHeading = this.props.data.duotoneHeading.sizes

    const duotone = this.props.data.duotone.sizes
    const grayscale = this.props.data.grayscale.sizes

    return (
      <div>

        <BgImage sizes={duotoneHeading} height={"500px"} />

        <div className="grid">
          <Image sizes={duotone} />
          <Image sizes={grayscale} />
          <Image sizes={grayscale} />
          <Image sizes={duotone} />
        </div>
        
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
    duotoneHeading: imageSharp(id: { regex: "/cupcakes.jpg/" }) {
      sizes(
        duotone: { highlight: "#f5e8db", shadow: "#831b4c" }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    duotone: imageSharp(id: { regex: "/donut.jpg/" }) {
      sizes(
        duotone: { highlight: "#f5cedb", shadow: "#3c6df0" }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    grayscale: imageSharp(id: { regex: "/donut.jpg/" }) {
      sizes(
        grayscale: true
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`