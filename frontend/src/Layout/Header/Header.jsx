import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    
  return (
    <div>
       <div className="nav">
       <div className="nav__left">
        <h3> ADOPTED</h3>
       </div>
       <div className="nav__right">
        <ul>
            <li>
                <Link to='/'>Home </Link>

            </li>

             <li>
                <Link to='/add'>Add</Link>

            </li>
        </ul>
       </div>
    
       </div>
    </div>
  )
}

export default Header