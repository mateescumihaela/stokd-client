import React from 'react'


const MapInfo = ({ info }) => (
 <div>
     <div>{info.title}</div>
    <img width={240} src={info.image} />
    <div>
      <a href='/weather'>Check out the surfing forecast</a>
    </div>
  </div> 

)

export default MapInfo