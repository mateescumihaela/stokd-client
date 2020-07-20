import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/commonComponents/Home'
import NotFound from './components/Not-Found'
import CurrentListing from './components/current/currentListing'
import CurrentSingle from './components/current/currentSingle'
import RegionNorthListing from './components/regions/regionNorthListing'
import RegionNorthSingle from './components/regions/regionNorthSingle'
import RegionSouthListing from './components/regions/regionSouthListing'
import RegionSouthSingle from './components/regions/regionSouthSingle'
import RegionEastListing from './components/regions/regionEastListing'
import RegionEastSingle from './components/regions/regionEastSingle'
import CommunityListing from './components/community/communityListing'
import SingleCommunity from './components/community/communitySingle'
import RegisterUser from './components/user/RegisterUser'
import LoginUser from './components/user/LoginUser'
import WeatherDisplay from './components/weather/WeatherDisplay'
import WeatherResults from './components/weather/WeatherResults'
import BottomNav from './components/commonComponents/BottomNav' 
import './style.css'
import 'tachyons'


const App = () => {

  return <BrowserRouter>

    <BottomNav />
  
    <Switch>
      <Route exact path= '/' component={Home} />    
      <Route exact path= '/current' component={CurrentListing} />
      <Route exact path= '/current/:id' component={CurrentSingle} />
      <Route exact path= '/regions-north' component={RegionNorthListing} />
      <Route exact path= '/regions-north/:id' component={RegionNorthSingle} />
      <Route exact path= '/regions-south' component={RegionSouthListing} />
      <Route exact path= '/regions-south/:id' component={RegionSouthSingle} />
      <Route exact path= '/regions-east' component={RegionEastListing} />
      <Route exact path= '/regions-east/:id' component={RegionEastSingle} />
      <Route exact path= '/communities' component={CommunityListing} />
      <Route exact path= '/communities/:id' component={SingleCommunity} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
      <Route path="/weather" component={WeatherDisplay} />
      <Route exact path= '/not-found' component={NotFound} />    
    </Switch>

  </BrowserRouter>
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

export default App;