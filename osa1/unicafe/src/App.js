import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => {
  if (text === "Positive:") return (
  <tr>
    <td>{text}</td>
    <td>{value}%</td>
  </tr>
  )
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+bad+neutral === 0) return (<p>No feedback given.</p>)

  const all = good+neutral+bad
  const average = (good + neutral*0 + bad*-1)/(good+neutral+bad)
  const positive = (good/(good+bad+neutral)) * 100
  
  return (
    <table>
      <tbody>
        <StatisticsLine text="Good:" value={good} />
        <StatisticsLine text="Neutral:" value={neutral} />
        <StatisticsLine text="Bad:" value={bad} />
        <StatisticsLine text="All:" value={all} />
        <StatisticsLine text="Average:" value={average} />
        <StatisticsLine text="Positive:" value={positive} />
      </tbody>
    </table>
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