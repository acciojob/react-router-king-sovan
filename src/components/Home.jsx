import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
        </ul>

        <h1>Welcome to my website!</h1>
    </div>
  )
}

export default Home