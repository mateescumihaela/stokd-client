import React from 'react'
import { WiDaySunny } from 'weather-icons-react'
import actions from './actions.js'
import getEmoji from './getEmoji.js'

class WeatherResults extends React.Component {

  constructor(props){
    super(props)
  }

  getWeather() {
    return this.props.weather.map(info => info.main).join(', ')
  }

  getIcon() {
    return this.props.weather.map(info => info.icon).join(', ')
  }

  convertTimeFromUnix() {
    const date = new Date(this.props.dt*1000)
    const hours = date.getHours()
    const minutes = '0' + date.getMinutes()
    const seconds = '0' + date.getSeconds()
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime
  }


  render(){
    if(!this.props.weather) return null
    return(

      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title">Spot Name</p>
                  <p className="subtitle">{this.props.name}</p>
                </article>
                <article className="tile is-child notification">
                  <p className="title">Temperature</p>
                  <p className="subtitle"> Current temperature: {this.props.main.temp}ºC</p>
                  <p className="subtitle"> Feels like: {this.props.main.feels_like}ºC</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">Current Weather</p>
                  <p className="subtitle"> {getEmoji(this.getWeather())} {this.getWeather()} </p>

                  {/* <img src={`http://openweathermap.org/img/w/${this.getIcon()}.png`} /> */}
       
                  <p className="subtitle">
                    Wind speed : {this.props.wind.speed}m/h
                    </p>
                    <p className="subtitle">
                    Wind direction: {this.props.wind.deg}º
                    </p>
                </article>
            
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">Surfing conditions</p>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                    {actions(this.props.wind.deg)}
                        </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WeatherResults