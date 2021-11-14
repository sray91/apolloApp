import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Header/>
      <Hero/>
      <About/>
      <Contact/>
    </Layout>
  )
}
export default IndexPage