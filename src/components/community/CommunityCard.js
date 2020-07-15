import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
 
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhmd29vZCIsImEiOiJjazQzOTZlZjEwNTNjM2VvYnVkanNlcG9tIn0.8AxZ5ufHCaZhHQvig95HWg';
// var map = new mapboxgl.Map({
//   container: 'article._id',
//   style: 'mapbox://styles/mapbox/streets-v11'
// })

const CommunityCard = ({ communities }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by6">
          <Link to={`/communities/${communities._id}`}><img src={communities.image} alt="Placeholder image"/></Link> 
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/communities/${communities._id}`}>{communities.title}</Link>
        <p className="has-text-grey-darker">{communities.text}</p>
      </div>
    </div>
  </div>
)
export default CommunityCard