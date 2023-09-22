import React, { useState } from 'react'

export default function TextForm(Props) {

    const handleUpClick = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            let newText = text.toUpperCase();
            setText(newText);
            Props.showAlert("TEXT IS CONVERTED TO UPPERCASE", "success");
        }
    }
    const handleLoClick = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            let newText = text.toLowerCase();
            setText(newText);
            Props.showAlert("text is converted to lowercase", "success");
        }

    }
    const handleClearClick = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            let newText = '';
            setText(newText);
            Props.showAlert("Text box is clear", "success");
        }

    }
    const handleCapClick = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            const word = text.split(" ");
            const cap = word.map(word => {
                if (word.length > 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                } else {
                    return word;
                }
            });
            let newText = cap.join(" ");
            setText(newText);
            Props.showAlert("Text Is Converted To Caplitaize", "success");
        }

    }
    const handlelopClick = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            const word = text.split(" ");
            const cap = word.map(word => {
                if (word.length > 0) {
                    const a = word.charAt(0).toLowerCase();
                    const b = word.slice(1).toUpperCase();
                    return a + b;

                } else {
                    return word;
                }
            });
            let newText = cap.join(" ");
            setText(newText);
            Props.showAlert("tEXT iS cONVERTED tO lOWERIZE", "success");
        }
    }
    const handlelCopy = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            const text = document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            Props.showAlert("Text has been Copied", "success");
        }
    }
    const handlelExtraSpace = () => {
        if (text.length === 0) {
            Props.showAlert("Text box is Empty", "info");
        } else {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            Props.showAlert("Extra spaces has been removed", "success");
        }
    }
    const biggestString = () => {
        const words = text.split(' ');
        const largest = words.reduce((prev, current) => {
            return current.length > prev.length ? current : prev;
        }, '');
        setBig(largest);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        biggestString();
    }
    const [text, setText] = useState('');
    const [big, setBig] = useState('');
    return (
        <>
            <div className={`contanier text-${Props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{Props.Heading}</h1>
                <div className="mt-3" >
                    <textarea className="form-control" style={{ backgroundColor: Props.mode === 'light' ? 'white' : 'grey', color: Props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handleUpClick}>UPPERCASE</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handleLoClick}>lowercase</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handleCapClick}>Capitalization</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handlelopClick}>sMALLIZATION</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handlelCopy}>Copy Text</button>
                    <button className="btn btn-primary mt-2 mx-1" onClick={handlelExtraSpace}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className={`conatiner my-3 text-${Props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * (text.trim() === '' ? 0 : text.match(/\S+/g).length)} Min to read this content </p>
                <p>Largest Word: {text.length >= big.length ? big : text}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in Text box above to preview here"}</p>

            </div>
        </>
    )
}
