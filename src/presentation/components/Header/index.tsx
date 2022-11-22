import React from 'react'
import './styles.scss'

import Input from '../Input'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Clean Weather</h1>
      <Input placeholder="Search location here" />
    </header>
  )
}

export default Header
