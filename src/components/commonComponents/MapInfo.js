import React from 'react'


const MapInfo = ({ info }) => (
 <div>
     <div>{info.title}</div>
    <img width={240} src={info.image} />
    <div>
      <a href={info.website} target='_blank'>Check out the surfing conditions</a>
    </div>
  </div> 

)

export default MapInfo