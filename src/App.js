import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/commonComponents/Home'
import NotFound from './components/Not-Found'
import CurrentListing from './components/current/currentListing'
import CurrentSingle from './components/current/currentSingle'
import RegionNorthListing from './components/regions/regionNorthListing'
import RegisterUser from './components/user/RegisterUser'
import LoginUser from './components/user/LoginUser'
import BottomNav from './components/commonComponents/BottomNav' 
import './style.css'


const App = () => {

  // console.log(Auth.getToken())
  // console.log(Auth.getUser().username)
  return <BrowserRouter>

    <BottomNav />

    <Switch>
      <Route exact path= '/' component={Home} />    
      <Route exact path= '/current' component={CurrentListing} />
      <Route exact path= '/current/:id' component={CurrentSingle} />
      <Route exact path= '/regions-north' component={RegionNorthListing} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
      <Route exact path= '/not-found' component={NotFound} />    
    </Switch>

  </BrowserRouter>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

export default App;