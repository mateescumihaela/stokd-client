import React from 'react'
import axios from 'axios'
import CurrentCards from './currentCards'

class CurrentListing extends React.Component {

  constructor() {
    super()
    this.state = {
      currents: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/current')
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
    </div>
  }
}

export default CurrentListing