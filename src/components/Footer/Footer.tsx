import React, { FC } from 'react'
import './style.css'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <a href="https://newline.io">NewLine.co</a>
      <br />
      {currentYear}
    </footer>
  )
}