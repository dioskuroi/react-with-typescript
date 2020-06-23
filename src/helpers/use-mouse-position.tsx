import { useState, useEffect  } from 'react'

const useMouseposition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return position
}

export default useMouseposition