import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'
import styles from '../commonComponents/Hero.module.css'

const CommunityCard = ({ communities }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by6">
          <Link to={`/communities/${communities._id}`}><img className='comm_image' src={communities.image} alt="Placeholder image"/></Link> 
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