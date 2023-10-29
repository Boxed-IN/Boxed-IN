import React from "react";
import poster from "../posters/poster01.jpeg";
import "./styles/Game.css";
import { useState, useRef, useEffect } from "react";
import Postgame from "./Postgame";

export const Game = () => {
  //const [answer, setAnswer] = useState("Grime");
  const [currentUser, setCurrentUser] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [movies, setMovies] = useState([{ poster_link: poster }]);
  const [isGameOver, setIsGameOver] = useState(false);
  const startScale = 5;
  const [scale, setScale] = useState(startScale);

  const answerInput = useRef("");

  useEffect(() => {
    fetch("/currentUser")
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      const data = {
        user: currentUser,
        score: score,
      };
      fetch("/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsGameOver(true);
      return;
    } else {
      const timeout = setTimeout(() => {
        setScale((prevScale) => prevScale - 1);
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer]);

  useEffect(() => {
    handleGetPosters();
  }, []);

  async function handleGetPosters() {
    let result = await fetch("/movieInfo");
    let parsedResult = await result.json();
    let shuffledParsedResult = shuffle(parsedResult);
    setMovies(shuffledParsedResult);
  }

  function handleSwapPoster() {
    answerInput.current.value = "";
    setMovies(movies.slice(1));
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return isGameOver ? (
    <Postgame score={score} />
  ) : (
    <>
      <img src={movies[0].poster_link} style={{transition: "transform 1000ms ease-in-out", transform: `scale(${scale})`}}></img>
      <p>Score: {score} </p>
      <h1> Timer: {timer} </h1>
      <input
        type="text"
        name="answer"
        ref={answerInput}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            console.log(answerInput.current.value + " vs " + movies[0].title);
            if (answerInput.current.value == movies[0].title) {
              console.log("answered: " + movies[0].title);
              setScore((prevScore) => prevScore + 1);
              handleSwapPoster()
            } else {
              console.log("failed: " + movies[0].title);
              setScore((prevScore) => prevScore - 1);
            }
          }
        }}
      />
    </>
  );
};
