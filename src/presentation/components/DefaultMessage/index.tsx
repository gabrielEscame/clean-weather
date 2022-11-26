import React from 'react'
import './styles.scss'
type Props = {
  text?: string
}

const DefaultMessage: React.FC<Props> = ({
  text = 'Explore weathers around the world'
}) => {
  return <p className="default-message">{text}</p>
}

export default DefaultMessage
