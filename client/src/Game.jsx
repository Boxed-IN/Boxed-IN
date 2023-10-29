import React from "react";
import {useState, useRef} from "react";
import {Timer} from "./timer";
import poster from "../posters/poster01.jpeg";
import "./styles/Game.css";

export const Game = () => {
    const [answer, setAnswer] = useState("Grime");
    const [score, setScore] = useState(0);


    const answerInput = useRef("");

    return (
    <>
    <div className="game-container">
        <img className="game-poster" src={poster}></img>

        <div className="game-score">
                <p className="score">Score: {score} </p>
                <Timer className="timer" time_limit={30}></Timer>
                <input className="game-input" type="text" name="answer" ref={answerInput} onKeyDown={(e) => {
                    console.log(e.key);
                    if(e.key === "Enter") {
                        console.log(answerInput.current.value + "vs" + answer)
                        if(answerInput.current.value == answer){
                            console.log("answered")
                            setScore((prevScore) => prevScore + 1);
                        }
                        else {
                            console.log("failed")
                            setScore((prevScore) => prevScore - 1);
                        }
                    }
                }}/>
         </div>
    </div>
    </>)
};