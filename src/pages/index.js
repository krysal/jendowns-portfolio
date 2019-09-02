import React from 'react'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <main id="home" className="container">
      <h1>
        Hello there!{' '}
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
      </h1>
      <p>
        My name is <strong>Jen</strong>, I'm a front-end developer in Austin,
        TX.
      </p>
      <p>
        I use code to create compelling &amp; delightful digital experiences.{' '}
        <span role="img" aria-label="heart">
          💖
        </span>
      </p>
    </main>
  </Layout>
)

export default Index
