import React from 'react'
import './styles.scss'

type Props = {
  caption: string
  temperature: string
  max: string
  min: string
}

const WeatherCard: React.FC<Props> = ({ caption, temperature, max, min }) => {
  return (
    <div className="weather-card">
      <div className="weather-card__container">
        <p className="weather-card__caption">{caption}</p>
        <h3 className="weather-card__temperature">{temperature}</h3>
      </div>

      <div className="weather-card__container">
        <div className="weather-card__range weather-card__range--max">
          <p className="weather-card__text">{max}</p>
          <p className="weather-card__caption">Max</p>
        </div>
        <div className="weather-card__range weather-card__range--min">
          <p className="weather-card__text">{min}</p>
          <p className="weather-card__caption">Min</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
