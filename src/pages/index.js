import React from 'react'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <main id="home" className="container">
      <h1>
        Hello there!{' '}
        <span role="img" aria-label="" aria-hidden="true">
          👋
        </span>{' '}
      </h1>
      <p>
        My name is <strong>Jen</strong>, and I'm a front-end developer.
      </p>
      <p>
        I use code to create compelling &amp; delightful digital experiences.{' '}
        <span role="img" aria-label="" aria-hidden="true">
          💖
        </span>
        <br />
        Run <code className="language-shell">$> npx jendowns</code> to see my
        npm card.
      </p>
    </main>
  </Layout>
)

export default Index
