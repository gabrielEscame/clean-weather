import React from 'react'
import './styles.scss'

import WeatherCard from './components/WeatherCard'
import { Header, DefaultMessage } from '@/presentation/components'

const CurrentWeather: React.FC = () => {
  return (
    <div className="current-weather">
      <Header />
      <section className="current-weather__content">
        <DefaultMessage />
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
