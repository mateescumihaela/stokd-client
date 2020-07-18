import React from 'react'
import axios from 'axios'
import RegionEastCards from './regionEastCards'



class RegionEast extends React.Component {

  constructor() {
    super()
    this.state = {
      regionEastData: []
    }
  } 

  componentDidMount() {
    axios.get(('http://localhost:5000/api/regions-east'))
      .then(res => this.setState({ regionEastData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.regionEastData)
    return <div className="section">
      <h1 className="titleOne">Check out some of the best spots in Eastern Portugal</h1>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.regionEastData.map((regioneast, i) => {
            return <RegionEastCards key={i} regioneast={regioneast}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default RegionEast