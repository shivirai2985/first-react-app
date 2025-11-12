import React from 'react'

export default function TextForm(props) {
    return ( 
        <>
        <h1>{props.heading}</h1>
    
<div class="mb-3">
  
  <textarea class="form-control" id="myBox" rows="12"></textarea>
</div>
</>
    )
}