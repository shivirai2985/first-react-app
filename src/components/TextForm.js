
import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
    let newText =text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
    let newText =text.toLowerCase();
    setText(newText)
  }

  const handleDltClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
    let newText =(" ");
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
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleDltClick}> Delete Text</button>
<div className="container my-3">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</>
    )
}