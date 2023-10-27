import React from "react";
import {useState, useRef} from "react";
import {Timer} from "./timer";
import poster from "../posters/PlaceholderPoster.png";

export const Game = () => {
    const [answer, setAnswer] = useState("Grime");
    const [score, setScore] = useState(0);


    const answerInput = useRef("");

    return (
    <>
    <img src={poster}></img>
    <p>Score: {score} </p>
    <Timer className="timer" time_limit={30}></Timer>
    <input type="text" name="answer" ref={answerInput} onKeyDown={(e) => {
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
    </>)
};