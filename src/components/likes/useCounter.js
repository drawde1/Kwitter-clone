import React from 'react'

const useCounter = (factor = 1) => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((c) => c + factor)
  const decrement = () => setCount((c) => c - factor)
  return {
    count,
    increment,
    decrement,
    setCount
  }
}

export default useCounter