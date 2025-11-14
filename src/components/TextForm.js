
import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
     let newText= text.toUpperCase();
     setText(newText)
   
  }

  const handleLoClick = ()=>{
    // console.log("upperCase was cliked:"+ text)
    let newText =text.toLowerCase();
    setText(newText)
  }

  const handleDltClick = ()=>{
    let newText =(" ");
    setText(newText)
  }

   const handlePreviewClick = () => {
   if(text.trim() !==""){
     setPreviewList([...PreviewList,text]); //new text preview list me add 
   }
   
  };

    const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("Form submitted:", text);
  };

 

   const handleOnChanged = (event)=>{
    // console.log("On Changed")
    setText(event.target.value)
    
  }


  const  [text, setText] = useState('Enter text here');
   const [PreviewList, setPreviewList] = useState([]); // preview saved text
  // text = ('new text enter') // wrong way to change the state. 
  // setText = ('new text enter') // correct way to change the state
  
    return ( 
        <>
        <h1>{props.heading}</h1>

    <div className="mb-3">
   <textarea className="form-control" 
   value={text}
    onChange={handleOnChanged} 
    id="myBox" rows="12">
    </textarea>
</div>


<button className="btn btn-primary mx-1" onClick={handleUpClick}> Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}> Lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleDltClick}> Delete </button>
<button className="btn btn-primary mx-1" type="Preview" onClick={handlePreviewClick}> Save to Preview</button>
 <button className="btn btn-primary mx-1"  type="submit" onClick={handleSubmitClick}>Submit </button>


<div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>


  <h2>Preview (Saved)</h2>
 {PreviewList.length === 0 ? (
          <p></p>
        ) : (
          <ul>
            {PreviewList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
         
        )}
         <p>{text}</p>
</div>
</>
    )
}