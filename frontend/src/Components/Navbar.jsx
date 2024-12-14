import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-yellow-500 h-12'>
        <div>
            <Link to='/'>Culture <span className='text-main-red'>Terville</span></Link>
            
        </div>
    </div>
  )
}

export default Navbar