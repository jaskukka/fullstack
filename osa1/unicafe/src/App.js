import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  const calculateAverage = () => {
    if (good + bad + neutral === 0) return 0
    return (
      (good + neutral*0 + bad*-1)/(good+neutral+bad)
    )
  }

  const calculatePositive = () => {
    if (good+bad+neutral === 0) {
      return 0
    }
    return (
      (good/(good+bad+neutral)) * 100
    )
  }

  return (
    <>
      <h3>Give feedback:</h3>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <h3>Statistics:</h3>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      All: {good+bad+neutral} <br />
      Average: {calculateAverage()} <br />
      Positive: {calculatePositive()}%
    </>
  )
}

export default App