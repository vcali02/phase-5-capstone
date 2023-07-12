import React from 'react'
import Recommended from "./Recommended"

function RecContainer({recs}) {
  return (
    <div>
        {/*1. map through each recommendation*/}
        {
            [...recs].map(el => {
                return <Recommended key={el.id} rec={el}/>
            })
        }
    </div>
  )
}

export default RecContainer