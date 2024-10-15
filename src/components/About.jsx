import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        </ul>

        <h1>About</h1>
        <p>This is a sample React Router program.</p>
    </div>
  )
}

export default About