import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDropdownContent = () => {
  return (
    <div className='dropdown-content'>
      <div className="dropdown-text">
        <Link to='/products'>Våra filter</Link>
        <Link to='/instruction'>Installations instruktioner</Link>
        <Link to='/products'>Leverans kartan</Link>
      </div>
    </div>
  )
}

export default NavbarDropdownContent