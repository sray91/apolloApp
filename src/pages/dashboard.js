import * as React from 'react'
import Layout from '../components/layout'

const dashboardPage = () => {
    return (
      <Layout pageTitle="Dashboard">
        <div className="flex bg-gray-800 items-center justify-center">
          <p className="font-notosans font-bold text-white align-middle py-4 px-8">Check out my sweet dashboard, bro!</p>
        </div>
      </Layout>
    )
}

export default dashboardPage