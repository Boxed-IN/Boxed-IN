import React from "react";
import {useState, useRef, useEffect} from "react";
import {Timer} from "./timer";
import poster from "../posters/PlaceholderPoster.png";

export const Game = () => {
    const [answer, setAnswer] = useState("Grime");
    const [score, setScore] = useState(0);
    const [movies, setMovies] = useState([{"poster_link": poster}]);

    const answerInput = useRef("");

    async function handleGetPosters() {
        let result = await fetch("/movieInfo");
        let parsedResult = await result.json();
        console.log(parsedResult);
        setMovies(parsedResult);
        console.log(movies);
    }

    useEffect(() => {
        handleGetPosters();
    }, []);

    return (
    <>
    <img src={movies[0].poster_link}></img>
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