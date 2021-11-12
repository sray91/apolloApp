import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/Header"
import Hero from "../components/Hero"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Header/>
      <Hero/>
    </Layout>
  )
}
export default IndexPage