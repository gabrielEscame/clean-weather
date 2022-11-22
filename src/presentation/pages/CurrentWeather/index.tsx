import React from 'react'
import './styles.scss'

const CurrentWeather: React.FC = () => {
  return (
    <div className="current-weather">
      <header className="header">
        <h1 className="title">Clean Weather</h1>
        <input className="input" placeholder="Search location here" />
      </header>

      <section className="current-weather__content">
        <div className="weather-card">
          <div className="weather-card__container">
            <p className="weather-card__caption">Rain Chanse</p>
            <h3 className="weather-card__temperature">23º</h3>
          </div>

          <div className="weather-card__container">
            <div className="weather-card__range weather-card__range--max">
              <p className="weather-card__text">23º</p>
              <p className="weather-card__caption">Max</p>
            </div>
            <div className="weather-card__range weather-card__range--min">
              <p className="weather-card__text">19º</p>
              <p className="weather-card__caption">Min</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CurrentWeather
