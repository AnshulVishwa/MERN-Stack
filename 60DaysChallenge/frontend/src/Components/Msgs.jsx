import React, { useState } from 'react'
import {MOTIVATE} from "../Data/motivate"
import {DEMOTIVATE} from "../Data/demotivate"
import {question} from "../Data/questions"
import axios from "axios"

function Msgs({day}) {
    const [ negativeCount , setNegativeCount ] = useState(0)
    const [ input1 , setInput1 ] = useState("")
    const [ input2 , setInput2 ] = useState("")
    const [ input3 , setInput3 ] = useState("")
    function generateRandomQuote() {
        return [ MOTIVATE[Math.floor(Math.random()*24)] , DEMOTIVATE[[Math.floor(Math.random()*24)]] ]       
    }
  return (
    <main className='flex main'>
        <div className="left startingMsg msg1 shadow">
            {question[0]}
        </div>
        <div className="questionsMainContainer flex">
            <div className="container1 flex">
                <span className='identify shadow flex'>Gym</span>
                <div className="left msg2">
                     {question[1]}
                </div>
                <div className="right reply">
                    <span onClick={ () => {setInput1("positive")} }>Gya tha</span>
                    <span onClick={ () => {
                        setInput1("negative")
                        setNegativeCount(1+negativeCount)
                    } }>Nahi Gya yaar 😔</span>
                </div>
                { input1 == "positive" && <div className='left'>Good Buddy Good</div> }
                { input1 == "negative" && <div className='left'>Bohot galat baat hai yee</div> }
            </div>
            <div className="container2 flex">
                <span className='identify shadow flex'>Junk Food</span>

                <div className="left msg2">
                     {question[2]}
                </div>
                <div className="right reply">
                    <span onClick={ () => {setInput2("positive")} }>Nahi bhai kuch nahi khaya</span>
                    <span onClick={ () => {
                        setInput2("negative")
                        setNegativeCount(1+negativeCount)
                    } }>Khaya yaar</span>
                </div>
                { input2 == "positive" && <div className='left'>Je baat, Bohot badiya✨</div> }
                { input2 == "negative" && <div className='left'>Bohot badiya bete😡</div> }
            </div>
            <div className="container3 flex">
            <span className='identify shadow flex'>Evening Ex</span>
                <div className="left msg2">
                     {question[3]}
                </div>
                <div className="right reply">
                    <span onClick={ () => {setInput3("positive")} }>Nahi nahi ki na shaam ko exercise</span>
                    <span onClick={ () => {
                        setInput3("negative")
                        setNegativeCount(1+negativeCount)
                    } }>Nahi ki yaar 😔</span>
                </div>
                { input3 == "positive" && <div className='left'>Good Good keep it up</div> }
                { input3 == "negative" && <div className='left'>Ese hoga patla tu!??</div> }
            </div>
            { 
                ( input1 != "" && input2 != "" && input3 != "" ) && 
                (( negativeCount <= 1  && <h2>{generateRandomQuote()[0]}</h2>) ||
                (negativeCount > 1  &&   <h2>{generateRandomQuote()[1]}</h2>))
            }
        </div>
        <button onClick={ async () => {
            if( input1 != "" && input2 != "" && input3 != "" ){
                const result = await axios.post( "http://localhost:5000" , {
                    Day : day,
                    Gym : (input1 == "positive") ? true : (input1 == "") ? undefined : false,
                    FastFood : (input2 == "positive") ? true : (input2 == "") ? undefined : false,
                    EveningExercise : (input3 == "positive") ? true : (input3 == "") ? undefined : false,
                    Performance : (negativeCount == 0) ? "Excellent Performance" : ( negativeCount == 1 ) ? "Well Tried" : (negativeCount == 2) ? "Can Do better" : "Worst"
                } )
                alert("I hope i will see you tomorrow,")
                alert("you may leave!")
                window.location.href = "https://www.google.com";
            }

        }}>Submit</button>
    </main>
  )
}

export default Msgs
