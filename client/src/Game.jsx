import React from "react";
import poster from "../posters/poster01.jpeg";
import "./styles/Game.css";
import { useState, useRef, useEffect } from "react";
import Postgame from "./Postgame";

export const Game = () => {
  //const [answer, setAnswer] = useState("Grime");
  const [currentUser, setCurrentUser] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(180);
  const [leaderboard, setLeaderboard] = useState([]);
  const [movies, setMovies] = useState([{ poster_link: poster }]);
  const [isGameOver, setIsGameOver] = useState(false);
  const startScale = 10;
  const [scale, setScale] = useState(startScale);

  const answerInput = useRef("");
  const posterRef = useRef("");
  

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
      }).then(() => {
        fetch("/leaderboard")
          .then((res) => res.json())
          .then((data) => setLeaderboard(data));
      });
      setIsGameOver(true);
      return;
    } else {
      const timeout = setTimeout(() => {
        if(scale > 1) setScale((prevScale) => prevScale - 1);
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer]);

  useEffect(() => {
    handleGetPosters();
  }, []);

  useEffect(() => {
    handleSetZoom();
  }, [scale]);

  async function handleGetPosters() {
    let result = await fetch("/movieInfo");
    let parsedResult = await result.json();
    let shuffledParsedResult = shuffle(parsedResult);
    setMovies(shuffledParsedResult);
  }

  function handleSwapPoster() {
    answerInput.current.value = "";
    setScale(startScale);
    setMovies(movies.slice(1));
  }

  function handleSetZoom() {
    const ref = document.getElementsByClassName("game-poster");
    ref[0].style.setProperty("--zoom", scale);
    //.style.setProperty("--zoom", scale);
   // posterRef.current.style.zoom = scale;
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
    <Postgame score={score} leaderboard={leaderboard} />
  ) : (
    <>
      <img className="game-poster" src={movies[0].poster_link} ></img>
      <div className="game-score" >
      <p className="score" >Score: {score} </p>
      <h1 className="timer" > Timer: {timer} </h1>
      <input
        className="game-input"
        type="text"
        name="answer"
        ref={answerInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (answerInput.current.value.toLowerCase() == movies[0].title.toLowerCase()) {
              setScore((prevScore) => prevScore + 1);
              handleSwapPoster()
            } else {
              setScore((prevScore) => prevScore - 1);
            }
          }
        }}
      />
      </div>
    </>
  );
};
