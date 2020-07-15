import React from 'react'
import { Link } from 'react-router-dom'

export const RegionSouthCards = ({ regionsouth }) => (
  <div className="singleImageRegion column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by6">
          <Link to={`/regions-south/${regionsouth._id}`}> <img src={regionsouth.image} alt="Placeholder image"/></Link>
        </figure>
      </div> 
    </div>
  </div>
)
export default RegionSouthCards