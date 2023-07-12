import React from 'react'

function ActionPrompt({prompt}) {
    console.log(prompt)
  return (
    <div>
        <h3>{prompt.action_type}</h3>
        <p>{prompt.description}</p>
    </div>
  )
}

export default ActionPrompt