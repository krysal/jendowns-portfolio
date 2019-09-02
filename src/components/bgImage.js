import Image from 'gatsby-image'
import styled from 'styled-components'

const BgImage = styled(Image)`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important;
    object-position: center center !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`

export default BgImage
