import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from '../commonComponents/Map'



const SingleRegionSouth = (props) => {
  const [data, setData] = useState( { comments: [] })


  useEffect(() => {
    fetch(`https://stokd-server.herokuapp.com/api/regions-south/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
  },[])


  function handleDelete(e) {
    axios.delete(`https://stokd-server.herokuapp.com/api/regions-south/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }

 
  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="titleFour">
            {data.spot}
          </p>
          <p className="subtitle">
            {data.level}
          </p>
          <p>
            {data.crowd}
          </p>
        </div>
        <div className="column is-half-tablet">
          <img src={data.image} />
        </div>
    

        <div className='columns'>
          <div className='column'>
            {data.comments.map((comment) => 
              <div className="is-half" 
                key={comment._id} > 
                <div>{comment.content}</div>
                <br />
                {/* <div>from {`${Auth.getUser().username}`}</div> */}
                <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
              </div> 
            )}
           <div className='column'>
              <Map  data={data}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div> 

}


export default SingleRegionSouth