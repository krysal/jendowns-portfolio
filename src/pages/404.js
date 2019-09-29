import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <main id="404" className="container">
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist!{' '}
        <span role="img" aria-label="" aria-hidden="true">
          👻
        </span>
      </p>
    </main>
  </Layout>
)

export default NotFoundPage
