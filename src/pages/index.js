import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to Apollo Fitness.</h1>
      <Link to="/dashboard">Dashboard</Link>
      <p>This is my hello world moment</p>
    </main>
  )
}
export default IndexPage