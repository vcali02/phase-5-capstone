import React, {useState, useEffect} from 'react'
import Prompts from "./Prompts"

function ActionPrompt({prompt}) {
    console.log(prompt)
    const action_prompts = prompt.action_prompt
    console.log(action_prompts)

    // //randomizer function
    // const getRandomPrompt = () => {
    //     return prompt[Math.floor(Math.random() * prompt.length)]
    // }

    // //randomizer state
    // const [randomPrompt, setRandomPrompt] = useState("")

    // //avoid infinite loop
    // useEffect((el) => {
    //     setRandomPrompt(getRandomPrompt())
    // },[])

    // //handleRandomizer
    // const handleRandomizer = () => {
    //     const oneRandomPrompt = getRandomPrompt()
    //     setRandomPrompt(oneRandomPrompt)
    // }

   


  return (
    <div>
        <h3>ActionPrompt</h3>
        
        {/* {randomPrompt}
        <button onClick = {handleRandomizer()}></button> */}
        {/* <p>{action.journal_prompts}</p> */}
        <p>{action_prompts}</p>
    </div>
  )
}

export default ActionPrompt