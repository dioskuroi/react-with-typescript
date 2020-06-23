import React from 'react'

interface IHelloProps {
  message?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  const { message } = props
  return (
  <h2>{ message }</h2>
  )
}

Hello.defaultProps = {
  message: 'Hello World'
}

export default Hello