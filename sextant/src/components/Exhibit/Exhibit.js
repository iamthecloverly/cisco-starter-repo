import React from 'react'
import { Button } from '../Button'
import PublicIP1 from '../PublicIP/PublicIP1'
import PublicIP2 from '../PublicIP/PublicIP2'
import "./Exhibit.css"


function Exhibit({title,body,ip}) {
  return (
    <div className='card-container'>
               <div className='card-Content'>
                <div className='card-title'>
                    <h1>{title}</h1>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div>
                    <p>{ip}</p>
                </div>
               </div>
            </div>
  )
}

export default Exhibit
