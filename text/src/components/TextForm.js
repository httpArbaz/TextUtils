import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        Settext(newText)

    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        Settext(newText)
    }
    const handleOnchange = (event) => {
        Settext(event.target.value)
    }

    const handleFirstLetterUppercase = () =>{
        function capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        const upper = text.split(' ').map(capitalize).join(' ');
        Settext(upper)
      }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, Settext] = useState("");

    
    return (
        <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'#042743'}} id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark mx-2" onClick={handleUpclick}>Convert To Upper Case</button>
            <button className="btn btn-dark mx-2" onClick={handleLoclick}>Convert To Lower Case</button>
            <button className="btn btn-dark mx-2" onClick={handleFirstLetterUppercase}>Convert First Letter To Upper Case</button>
            <button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length}Words & {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length}Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something In The Textbox Above To Preview It Here"}</p>
        </div>
        </>
    );
}
