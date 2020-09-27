import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='landing'>
      <Link to='/table'>See Concerts</Link>
    </div>
  )
}

export default Home
