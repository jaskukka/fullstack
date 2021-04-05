import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  let average = 0
  let positive = 0

  if (good+neutral+bad === 0) {
    average = 0
    positive = 0
  }
  else {
    average = (good + neutral*0 + bad*-1)/(good+neutral+bad)
    positive = (good/(good+bad+neutral)) * 100
  }

  return (
    <div>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      All: {all} <br />
      Average: {average} <br />
      Positive: {positive}%
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <>
      <h3>Give feedback:</h3>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <h3>Statistics:</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App