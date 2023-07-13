import React from 'react'
import Prompts from "./Prompts"

function ActionPrompt({prompt}) {
    console.log(prompt)
    // console.log(Object.values(action))
    // let prompt_arr = [Object.values(action)]
   

    // console.log(Object.values(prompt))
    // const single_prompt = Object.keys(prompt)


  return (
    <div>
        <h3>ActionPrompt</h3>
        {/* {displayAction()} */}
        {/* <p>{action.journal_prompts}</p> */}
        <p>{prompt.action_prompt}</p>
    </div>
  )
}

export default ActionPrompt