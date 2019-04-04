import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='ui secondary pointing menu'>
      <Link to='/' className='item'>Home</Link>
      <Link to='/comment/' className='item'>Comment</Link>
    </nav>
  )
}

export default Header
