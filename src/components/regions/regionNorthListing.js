import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RegionNorthCards from './regionNorthCards'
import Masonry from 'react-masonry-component';

const masonryOptions = { transitionDuration: 0 }
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class RegionNorth extends React.Component {

  constructor() {
    super()
    this.state = {
      regionNorthData: []
    }
  } 
  
  componentDidMount() {
    axios.get(('https://stokd-server.herokuapp.com/api/regions-north'))
      .then(res => this.setState({ regionNorthData: res.data }))
      .catch(err => console.log(err))
  }
  

  render() {
    console.log(this.state.regionNorthData)
    return <Masonry className={'my-gallery-class'} // default ''
    elementType={'ul'} // default 'div'
    options={masonryOptions} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    imagesLoadedOptions={imagesLoadedOptions} // default {}
>
  <div className="section">
      <h1 className="titleOne">Check out some of the best spots in Northern Portugal</h1>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.regionNorthData.map((regionnorth, i) => {
            return <RegionNorthCards key={i} regionnorth={regionnorth}/>
          })}
        </div>
      </div>
    </div>
    </Masonry>
  }
}

export default RegionNorth