import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { TwitterIcon, GithubIcon, CodepenIcon } from '../components/Icons'

import './index.scss'

const Header = () => (
  <header>
    <Link to="/" className="nav__link">home</Link>
    <nav>
      <Link to="/posts" className="nav__link" activeClassName="nav__link--active">posts</Link>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="container">
    <small>&copy; {(new Date()).getFullYear()} Jen Downs</small>
    <section>
      <a className="footer__link" href="https://twitter.com/jenisora">
        <TwitterIcon />
      </a>
      <a className="footer__link" href="https://github.com/jendowns">
        <CodepenIcon />
      </a>
      <a className="footer__link" href="https://codepen.io/jendowns">
        <GithubIcon />
      </a>
    </section>
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
