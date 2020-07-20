import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

const BottomNav = () => {

  const [data, setData] = useState()

  function handleLogout(e) {
    e.preventDefault()
    Auth.logOut()
    setData({ ...data })
    e.props.history.push('/')
  }

  console.log(data)
  
  
  return (
    <div className='z-1 garamond flex fixed w-100 justify-between bg-white'>
      <div className='flex'>
        <Link to={'/'} className='grow green pa3 ml4'>Home</Link>
        <Link to={'/current'} className='grow green pa3'>News</Link>
        <Link to={'/communities'} className='grow green pa3'>Community</Link>
        <Link to={'/weather'} className='grow green pa3'>Forecast</Link>
        <div className='grow green pa3 pointer flex flex-wrap hide-child'>
          Explore by region ▸ 
          <div className='child'>
            <Link to={'/regions-north'} className='green pa3'>
              North
            </Link>
            <Link to={'/regions-south'} className='green pa3'>
              South
            </Link>
            <Link to={'/regions-east'} className='green pa3'>
              East
            </Link>  
          </div>
          
        </div>
      </div>     

      <div className='flex'>

        {!Auth.isAuthenticated() && <Link to='/register' className='grow gray pa3'>
          <strong>Sign up</strong>
        </Link>}

        {!Auth.isAuthenticated() && 
        <Link to='/login' className='grow gray pa3'>
          Log in
        </Link>}

        {Auth.isAuthenticated() && <a className='grow gray pa3 mr3' onClick={(e)=>handleLogout(e)}>
          Log out
        </a>} 

        {Auth.isAuthenticated() && <Link to='dashboard' className='grow gray pa3 mr3'>
          { Auth.isAuthenticated() ? `Hello ${Auth.getUser().username}👋` : '' }
        </Link>}

      </div>
    </div>
  )
}



export default BottomNav