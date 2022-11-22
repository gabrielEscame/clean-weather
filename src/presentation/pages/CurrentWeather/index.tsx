import React from 'react'
import './styles.scss'

import WeatherCard from './components/WeatherCard'

const CurrentWeather: React.FC = () => {
  return (
    <div className="current-weather">
      <header className="header">
        <h1 className="header__title">Clean Weather</h1>
        <input className="header__input" placeholder="Search location here" />
      </header>

      <section className="current-weather__content">
        <WeatherCard
          caption="Rain Chanse"
          temperature="23º"
          max="23º"
          min="19º"
        />
      </section>
    </div>
  )
}

export default CurrentWeather
