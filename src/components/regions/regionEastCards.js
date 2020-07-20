import React from 'react'
import { Link } from 'react-router-dom'


export const RegionEastCards = ({ regioneast }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by6">
          <Link to={`/regions-east/${regioneast._id}`}>{regioneast.spot}<img src={regioneast.image} alt="Placeholder image" /> </Link>
        </figure>
      </div>
    </div>
  </div>
)


export default RegionEastCards