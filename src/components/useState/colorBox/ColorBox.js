import React, { useState } from 'react';
import './style.scss'

const getRandomColor = () => {
  const colorList = ['black', 'green', 'yellow']
  const randomIndex = Math.trunc(Math.random() * 3)
  return colorList[randomIndex]
}

const ColorBox = (props) => {
  const [color, setColor ] = useState(() => {
    const initColor = localStorage.getItem('box_color')
    return initColor || 'deeppink'
  })

  const handleBoxClick = () => {
    const newColor = getRandomColor()

    setColor(newColor)

    localStorage.setItem('box_color', newColor)
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    />
  );
}

export default ColorBox;