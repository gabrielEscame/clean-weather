import React from 'react'

type Props = {
  condition: boolean
  children: JSX.Element
}

const IF: React.FC<Props> = ({ condition, children }) => {
  return <>{condition && children}</>
}

export default IF
