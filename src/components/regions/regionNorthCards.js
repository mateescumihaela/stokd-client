import React from 'react'
import { Link } from 'react-router-dom'

export const RegionNorthCards = ({ regionnorth }) => (
  <div className="singleImageRegion column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by6">
          <Link to={`/regions-north/${regionnorth._id}`}> <img src={regionnorth.image} alt="Placeholder image"/></Link>
        </figure>
      </div> 
    </div>
  </div>
)
export default RegionNorthCards