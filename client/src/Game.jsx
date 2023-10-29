import React from "react";
import {useState, useRef} from "react";
import {Timer} from "./timer";
import poster from "../posters/poster01.jpeg";
import "./styles/Game.css";
import { useState, useRef, useEffect } from "react";
import poster from "../posters/PlaceholderPoster.png";
import Postgame from "./Postgame";

export const Game = () => {
  const [answer, setAnswer] = useState("Grime");
  const [currentUser, setCurrentUser] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [movies, setMovies] = useState([{ poster_link: poster }]);
  const [isGameOver, setIsGameOver] = useState(false);

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
    console.log(parsedResult);
    setMovies(parsedResult);
    console.log(movies);
  }

  return isGameOver ? (
    <Postgame score={score} />
  ) : (
    <>
      <img src={movies[0].poster_link}></img>
      <p>Score: {score} </p>
      <h1> Timer: {timer} </h1>
      <input
        type="text"
        name="answer"
        ref={answerInput}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            console.log(answerInput.current.value + "vs" + answer);
            if (answerInput.current.value == answer) {
              console.log("answered");
              setScore((prevScore) => prevScore + 1);
            } else {
              console.log("failed");
              setScore((prevScore) => prevScore - 1);
            }
          }
        }}
      />
    </>
  );
};
