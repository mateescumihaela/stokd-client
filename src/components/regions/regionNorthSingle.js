import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from '../commonComponents/Map'
import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'

const SingleRegionNorth = (props) => {
  const [data, setData] = useState({ comments: [] })


  useEffect(() => {
    fetch(`http://localhost:5000/api/regions-north/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))     
  }, [])


  function handleDelete(e) {
    axios.delete(`http://localhost:5000/api/regions-north/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }


  
  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="titleFour">
            {data.title}
          </p>
          <p className="subtitle">
            {data.address}
          </p>
          <p>
            {data.text}
          </p>
        </div>
        <div className="column is-half-tablet">
          <img src={data.image} />
          <Rating className="rating" />
        </div>

        <CommentForm 
          url={`http://localhost:5000/api/regions-north/${props.match.params.id}/comments`}
          updateData={setData}
          data={data}
        />

        <div className='columns'>
          <div className='column'>
            {data.comments.map((comment) => 
              <div className="is-half" 
                key={comment._id}> 
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


export default SingleRegionNorth