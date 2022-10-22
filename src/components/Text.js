import React, { useState } from "react";
// import Navbar from './Navbar'
export default function Text(props) {
   
    // //tetx="new tet" wrong way
    // //setText("srtyuijk")correct way
    const upperText = ()=>{
      //console.log("upper  text clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const copyText = ()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("copy text to clipboard", "success");
    }
    const  extraSpaces = ()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
    }
   
    const lowerText = ()=>{
      let newText=text.toLowerCase()
      setText(newText);
      props.showAlert("converted to lowercase", "success");
  }
  const clearText = ()=>{
  
    setText("");
    props.showAlert("clear text", "success");
}
const handleOnChange = (event)=>{
  console.log("on change");
  let newText=event.target.value;
  setText(newText)
}


    const [text,setText] =useState("");
  return (
    <>
    {/* <Navbar/> */}
    <div className="container" style={{backgroundColor:props.mode==="light"?"white":"#037ffd"}}>
      <div className="mb-3">
        <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <textarea mode={props.mode} 
          className="form-control"
          id="myBox" 
          rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"#037ffd"}}
        ></textarea>
        <button disabled={text.length===0}className="btn btn-primary my-3 mx-5"   mode={props.mode} onClick={upperText}>CONVERT TO UPPERCASE</button>
        <button disabled={text.length===0}className="btn btn-primary my-3 mx-5" mode={props.mode} onClick={lowerText}>CONVERT TO lowerCASE</button>
        <button disabled={text.length===0}className="btn btn-primary mx-5 my-3"  onClick={clearText}> clear </button>
        <button  disabled={text.length===0}className="btn btn-primary mx-5 my-3"  onClick={copyText}> Copy text </button>
        <button disabled={text.length===0}className="btn btn-primary mx-5 my-3"  onClick={extraSpaces}> Handle extra spaces</button>
      </div>
    </div>
    <div className="container my-3"style={{backgroundColor:props.mode==="light"?"white":"#037ffd"}}>
      <div style={{color:props.mode==="light"?"black":"white"}}>
<h1 >your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} &nbsp;words and {text.length} characters</p>
<p>{0.008*text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h3>preview</h3>
<p>{text.length>0?text:"enter text to preview below"}</p>
</div>
</div>
    </>
  );
}
