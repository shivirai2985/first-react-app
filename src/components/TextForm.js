
import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
    let newText =text.toUpperCase();
    setText(newText)
  }

   const handleOnChanged = (event)=>{
    // console.log("On Changed")
    setText(event.target.value)
  }


  const  [text, setText] = useState('Enter text here');
  // text = ('new text enter') // wrong way to change the state. 
  // setText = ('new text enter') // correct way to change the state
  
    return ( 
        <>
        <h1>{props.heading}</h1>
    
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChanged} id="myBox" rows="12"></textarea>
</div>

<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</>
    )
}