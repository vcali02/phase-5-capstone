import React, {useState, useEffect} from 'react'
import ActionPrompt from './ActionPrompt'
import {useParams } from "react-router-dom";

function ActionOptions({action, prompt}) {
    
    /*------------------STATE--------------------*/
    //4.prompt state
    const [selectPrompt, setSelectPrompt] = useState(true)


    /*------------------STATE--------------------*/
    /*------------------PARAM--------------------*/
    
    

    /*------------------PARAM--------------------*/
    /*-------------------CRUD--------------------*/

   

    /*-------------------CRUD--------------------*/
    /*-------------------FUNK--------------------*/
    function handleClick(e){
        setSelectPrompt(!selectPrompt)
    }
    /*-------------------FUNK--------------------*/
    /*-----------------ITERATE-------------------*/



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
                <ActionPrompt action={action}/>
            </div>
        )}
    </div>
  )
}

export default ActionOptions