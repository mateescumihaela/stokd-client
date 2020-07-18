import React from 'react'
import axios from 'axios'
import RegionSouthCards from './regionSouthCards'

class RegionSouth extends React.Component {

  constructor() {
    super()
    this.state = {
      regionSouthData: []
    }
  } 

  componentDidMount() {
    axios.get(('https://stokd-server.herokuapp.com/api/regions-south'))
      .then(res => this.setState({ regionSouthData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.regionSouthData)
    return <div className="section">
      <h1 className="titleOne">Check out some of the best spots in Southern Portugal</h1>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.regionSouthData.map((regionsouth, i) => {
            return <RegionSouthCards key={i} regionsouth={regionsouth}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default RegionSouth