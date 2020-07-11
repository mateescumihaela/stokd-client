import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const CurrentCards = ({ current }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-5by5">
          <Link to={`/current/${current._id}`}><img src={current.image} alt="Placeholder image"/> </Link>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/current/${current._id}`}>{current.title}</Link>
      </div>
    </div>
  </div>
)

export default CurrentCards