import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const updateMouse = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    document.addEventListener('click', updateMouse)

    return () => {
      document.removeEventListener('click', updateMouse)
    }
  })

  return (
  <p>X: { position.x }, y: { position.y }</p>
  )
}

export default MouseTracker