import React, {useState, useEffect} from 'react'
import ActionPrompt from './ActionPrompt'
import {useParams } from "react-router-dom";

function ActionOptions({action}) {
    
    /*------------------STATE--------------------*/
    //4.prompt state
    const [selectPrompt, setSelectPrompt] = useState(true)


    /*------------------STATE--------------------*/
    /*-------------------CRUD--------------------*/

   

    /*-------------------CRUD--------------------*/
    /*-------------------FUNK--------------------*/
    function handleClick(e){
        setSelectPrompt(!selectPrompt)
    }
    /*-------------------FUNK--------------------*/
    /*-----------------ITERATE-------------------*/
    
    //allows access to the nested array of action prompts
    console.log(Object.values(action))
    let prompt_arr = Object.values(action)
    console.log(prompt_arr)
    // console.log(Object.values(prompt_arr))
    
    const prompts = Object.values(prompt_arr[4])
    console.log(prompts)
    // const prompt = Object.values(prompts)
    
    //iterating through the desired array to access individual prompts
    const prompt = [...prompts].map((el, i) => {
        return <ActionPrompt key={i} prompt={el}/>
    })
    console.log(prompt)

    /*-----------------ITERATE-------------------*/


  return (
    <div>
        <h2>ActionOptions</h2>
        {selectPrompt ? (
            <div onClick={(e) => handleClick(e)}>
                {/* <img src={action.image}></img> */}
                <h3>{action.action_type}</h3>
                <p>{action.description}</p>
            </div>
        ) : (
            <div onClick={(e) => handleClick(e)}>
                {/*the single prompt prop passed to child*/}
                {prompt} 
            </div>
        )}
    </div>
  )
}

export default ActionOptions