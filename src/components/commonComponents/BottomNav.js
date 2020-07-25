import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import LoginLogout from './LoginLogout'

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
    <div className='f5 lh-copy z-1 garamond flex fixed w-100 justify-between bg-white'>
      <div className='flex'>
        <Link to={'/'} className='grow orange pa3 ml4'>Home</Link>
        <Link to={'/current'} className='grow orange pa3'>News</Link>
        <Link to={'/communities'} className='grow orange pa3'>Community</Link>
        <Link to={'/weather'} className='grow orange pa3'>Forecast</Link>
        <div className='grow orange pa3 pointer flex flex-wrap hide-child'>
          Explore by region ▸ 
          <div className='child'>
          <Link to={'/regions-south'} className='orange pa3'>
              Southern Portugal
            </Link>
            <Link to={'/regions-north'} className='orange pa3'>
              (WIP) Northern Portugal
            </Link>
          </div>
          
        </div>
      </div>     
      <LoginLogout />
    </div>
  )
}



export default BottomNav