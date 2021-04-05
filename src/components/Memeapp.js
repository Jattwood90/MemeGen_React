import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable'; 
import './Memeapp.css';

export default function MemeApp() {
    
    //const for array of memes
    const [memes, setMemes] = useState([]);
    //const for main image meme | peanut butter jelly time default image....
    const [meme, setMeme] = useState('https://media.giphy.com/media/IB9foBA4PVkKA/giphy.gif');
    
    //font size state
    const [fontSize, setFontSize] = useState(35);
    const [toggleColour, setColour] = useState('white');
    const [toggleFont, setFont] = useState(true);
    const [fontType, setFontFamily] = useState('Impact');
    
    const fontStyle = {
        fontSize: `${fontSize}px`,
        color: `${toggleColour}`,
        fontFamily: `${fontType}`,
    }

    //const for text input
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");

    //Changing text logic - couldn't think of a DRY method. Maybe 
    //should have imported these bits as an additional component?
    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };
    const onChangeHandler2 = event => {
        setInputValue2(event.target.value);
      };
    const onChangeHandler3 = event => {
        setInputValue3(event.target.value);
      };
    const onChangeHandler4 = event => {
        setInputValue4(event.target.value);
      };
    
    //Api logic
    useEffect(() => {
        try {
            fetch('http://127.0.0.1:8000/%5Eapi/item/').then(x =>
            x.json().then(response => setMemes(response) ));
        } catch (e) {
            console.log(e)
            }
        }, []); //prevents infinite rendering loop!

    return (
        <div className="maincontainer">
            {/* Main image */}
            <div className="template">
                <img className="preview" src={meme}></img>
                
                {/* Meme captions */}
                <Draggable defaultPosition={{x: 70, y: 17}} bounds="body">
                    <div style={fontStyle} className="memeFont" >{inputValue}</div>
                </Draggable>
                <Draggable defaultPosition={{x: 195, y: 40}} bounds="body">
                    <div style={fontStyle} className="memeFont" >{inputValue2}</div>
                </Draggable>
                <Draggable defaultPosition={{x: 225, y: 80}} bounds="body">
                    <div style={fontStyle} className="memeFont" >{inputValue3}</div>
                </Draggable>
                <Draggable defaultPosition={{x: 245, y: 200}} bounds="body">
                    <div style={fontStyle} className="memeFont" >{inputValue4}</div>
                </Draggable>
                {/* https://www.npmjs.com/package/react-moveable - this package would have been great 
                to use for making the tags rotate, and snap to size */}
            </div>

            <div className="formMMcontainer">
            <h6 style={{textAlign:'center'}}>Click images below to preview meme!</h6>
            {/* Image scroll wheel thing */}
            <div className="mmcontainer">
                {memes.map(response => {
                    return (
                    <img onClick={() => setMeme(((meme) => [response.image]))} 
                        className="mmbox" key={response.id} 
                        src={response.image} alt={response.title}
                        id="image-change" >
                    </img>);         
                    })}
                 
            </div>
            <hr></hr>

            <div className="formContainer">
                {/* Map response box count for number of inputs? or have a setState as 2, which changes based on API box_count value*/}
                <form>
                    <textarea onChange={onChangeHandler} value={inputValue} className="formInput" placeholder="Draggable captions"></textarea>
                    <textarea onChange={onChangeHandler2} value={inputValue2} className="formInput" placeholder="...second caption"></textarea>
                    <textarea onChange={onChangeHandler3} value={inputValue3} className="formInput" placeholder="... third caption"></textarea>
                    <textarea onChange={onChangeHandler4} value={inputValue4} className="formInput" placeholder="another?"></textarea>
                </form>
                <hr></hr>
                    <button className="btn btn-primary" style={{margin: '3px'}} onClick={() => setFontSize(fontSize +2)}>+</button>
                    <button className="btn btn-danger" style={{margin: '3px'}} onClick={() => setFontSize(fontSize -2)}>-</button>
                    <button className="btn btn-light" style={{margin: '3px'}} onClick={() => setColour('white')}>White</button>
                    <button className="btn btn-dark" style={{margin: '3px'}} onClick={() => setColour('black')}>Black</button>
                {/* Logic to toggle between two meme font styles */}
                {toggleFont ? 
                    <button className="btn btn-danger" style={{margin: '3px'}} onClick={() => setFontFamily('Arial') & setFont(false)}  >Arial</button>:
                    <button className="btn btn-dark" style={{margin: '3px'}} onClick={() => setFontFamily('Impact') & setFont(true)}>Impact</button>
                }
                
            </div>
            </div>
        
        </div>
        
    );
 

    }