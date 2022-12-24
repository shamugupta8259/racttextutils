import React, { useState } from 'react'

export default function TextForm(props) {
    

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
       
    }
    const handleUpClick=()=>{
        // console.log("upper case was click"+ text);
        let newText=text.toUpperCase();
        setText(newText);

         props.showAlert(" Converted ito uppercase","success")
    }
    const handleLoClick=()=>{
        // console.log("upper case was click"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted ito lowercase","success")
    }
    const handleOnChange1=(event)=>{
        // console.log("on change");
        setT1(event.target.value);
    }
    const handleclearClick=()=>{
        // console.log("upper case was click"+ text);
        // let newText=text.toLowerCase();
        setText("");
        props.showAlert(" Cleared text","success")
    
    }
    const handlefind=()=>{
        // console.log("upper case was click"+ text);
        let newText=text.toLowerCase();
        let nn=t1.toLowerCase();
        if(nn.length===0){
            // const a=document.querySelector(".check");
            props.showAlert(" Please Enter word","warning")
    
            // a.textContent="Please Enter word";
        }
        else if(newText.includes(nn)){
            // console.log("jjj");
            // const a=document.querySelector(".check");
            // a.textContent="the word exists";
            props.showAlert(" The word exists","success")
            
            // <button className="btn btn-info my-3 mx-3" >yes it is there</button>
        }
        else {

            // const a=document.querySelector(".check");
            // a.textContent="the word  does not exists";
            props.showAlert(" The word  does not exists","danger")
    
        }
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" The text is coipied","success")
    
    }
    const handlespaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));

        props.showAlert(" The extra spaces are removed","success")
    
    }
    const checkwords=()=>{
        let a=text.split(" ");
        if(text.length===0){
            return 0;
        }
        else if(a[-1]===" "){
            return text.split(" ").length-1;
        }
        else{
            return text.split(" ").length;
        }
    }
    const [text,setText]=useState("");
    const [t1,setT1]=useState("search word");
    
    return (
        <>
        <div style={{color:props.mode==='light'?'rgb(73, 69, 62)':'white'}}>
                <h1 style={{color:props.mode==='light'?'rgb(73, 69, 62)':'white'}}>{props.heading}
                </h1>
                <div className="form-group">
                    <textarea className="form-control"style={{backgroundColor: props.mode==='light'?'white':'rgb(73, 69, 62)',color:props.mode==='light'?'rgb(73, 69, 62)':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-success my-3 mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-success my-3 mx-3" onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-info my-3 mx-3" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-info my-3 mx-3" onClick={handlespaces}>Remove Extra Spaces</button>
                
                
                <div><textarea className="form-control" value={t1} onChange={handleOnChange1} id="myBox" rows="1"  ></textarea>
                </div>
                <button className="btn btn-info my-3 mx-3" onClick={handlefind}>Search Word</button>
                <p className='check'></p>
                
                </div>
        <div className="container" style={{color:props.mode==='light'?'rgb(73, 69, 62)':'white'}}>
            <h2>Your text summary</h2>
            <p>No. of words: {checkwords()}, 
            No.of characters: {text.length}</p>
            <p>{0.008 * checkwords()} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
