import React,{ useState, useEffet, useEffect } from 'react'
import axios from 'axios'
import CurrentCards from './currentCards'
import Newsletter from '../commonComponents/Newsletter'
import styles from '../commonComponents/Newsletter.module.css'

 class CurrentListing extends React.Component {

  constructor() {
    super()
    this.state = {
      currents: []
    }
  }

  componentDidMount() {
    axios.get('https://stokd-server.herokuapp.com/api/current')
      .then(res => this.setState({ currents: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.currents)
    return <div className="section">
      <h1 className="titleOne">Latest Articles</h1>
      <div className="container">
        <div className="titleThree">
          <div className="columns is-mobile is-multiline">
            {this.state.currents.map((current, i) => {
              return <CurrentCards key={i} current={current} />
            })}
         
          </div>
        </div>

      </div>
      <Newsletter />
    </div>
    
  }
}

export default CurrentListing 


