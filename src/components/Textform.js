import React, { useState } from 'react'

export default function TextForm(props) {

    const upperCase = () => {

        let textUpperCase = text.toUpperCase();
        setText(textUpperCase);
        props.showAlert("Convert To UpperCase","success")
    }

    const copyText=()=>{
       var text =document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text is copyed ","success")
    }

    const speak = () => {
        
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    props.showAlert("Now speaking ")
    }


    const lowerCase = () => {
        let textLowerCase = text.toLowerCase();
        setText(textLowerCase);
        props.showAlert("Convert to lowerCase","success")
    }

    const clearText = () => {
        setText("");
        props.showAlert("Clear text ","success"); 
    }

    const handleOn = (e) => {
        
        setText(e.target.value)
    }

    const [text, setText] = useState('');
   
    return (
        <div className='container'>

            <div className='textArea'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" placeholder='Enter the text' value={text} onChange={handleOn}  id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-4' onClick={upperCase}> Convert to upperCase</button>
               
                <button className='btn btn-primary' onClick={lowerCase}> Convert to lowerCase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                {/* <button type="submit" onClick={selectVoice} className="btn btn-warning mx-2 my-2">select voice </button> */}
                <button className='btn btn-primary mx-4' onClick={clearText}> Clear Text </button>
                <button className='btn btn-primary mx-4' onClick={copyText}> Copy Text </button>
            </div>
            <div className='textSummary'>
                <h1>Your text summary here</h1>
                <p>{text.split(" ").length} words and have {text.length} alphabet</p>
                <p>{0.008 * text.split(" ").length} mimutes to read it </p>
            </div>

        </div>


    )
}
