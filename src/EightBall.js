import React, {useState} from 'react';

const EightBall = ({answers}) => {

    const initialFunc = () => {
       return "Think of a Question" 
       
    }
    const adjust = () => {
        const a = index()
        laterFunc(a)
        color(a)
    }
    const index = () => {
        return Math.floor(Math.random() * answers.length) + 1
    }
    const laterFunc = (index) => {
        if (document.getElementById('hello').textContent === initialFunc()){
            return laterState(answers[index]["msg"]) 
        } else {
            return laterState(initialFunc())
        }
    }
    const color = (index) => {
        if (document.getElementById('hello').textContent === initialFunc()){
            return document.getElementById('hello').style.backgroundColor = answers[index]["color"]
        } else {
            return document.getElementById('hello').style.backgroundColor = "white" 
        }
    }
    const [initialState, laterState] = useState(initialFunc())
    
    return (
        <>
        <h3 id="hello"  onClick={adjust}>{initialState}</h3>
        </>
    )
}

export default EightBall;

// define a beginning message
// See if message is a question;
// Assign a click event to monitor and do following if clicked.
// Assign a random value and pick an answer


