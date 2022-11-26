import React from 'react'

type Props = {
  condition: boolean
  children: JSX.Element
}

const IF: React.FC<Props> = ({ condition, children }) => {
  if (condition) {
    return children
  }
}

export default IF
