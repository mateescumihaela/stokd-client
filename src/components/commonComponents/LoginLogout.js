import React from 'react'

import Auth from '../../lib/auth'
import { Link, withRouter } from 'react-router-dom'

class LoginLogout extends React.Component{
  constructor(props){
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  render(){
    return(
      <div className='flex'>
        {!Auth.isAuthenticated() &&  <Link to='/register' className='grow gray pa3'>
          <strong>Sign up</strong>
        </Link>}
        {!Auth.isAuthenticated() &&   <Link to='/login' className='grow gray pa3'>
          Log in
        </Link>}
        {Auth.isAuthenticated() &&
        <span className='grow gray pa3' onClick={this.logout}>Logout </span>}
      </div>

    )
  }
}

export default withRouter(LoginLogout)