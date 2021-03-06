import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMost] = useState(0)

  const handleNew = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    if (copy[selected] > votes[mostVotes]) {
      console.log("found an anecdote with more votes - updating...")
      setMost(selected)
    }
  }

  return (
    <>
      <h2>Anecdote of the day:</h2>
      <p>
        {anecdotes[selected]} <br /> Has {votes[selected]} votes.
      </p>
      <Button handleClick={handleNew} text="New Anecdote" />
      <Button handleClick={handleVote} text="Vote" />
      <h2>Anecdote with most votes:</h2>
      <p>{anecdotes[mostVotes]} <br /> Has {votes[mostVotes]} votes.</p>
    </>
  )
}

export default App