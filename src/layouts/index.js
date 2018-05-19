import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <header className="container">
    <nav>
      <a href="#">projects</a>
      <a href="#">words</a>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="container">
    <small>&copy; {(new Date()).getFullYear()} Jen Downs</small>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="Cute Software"
      meta={[
        { name: 'description', content: 'cute software' },
        { name: 'keywords', content: 'cute' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
