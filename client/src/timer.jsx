
import React from "react";
import {useState, useEffect } from "react";

export const Timer = (props) => {
    const {className} = props;
    const [timer, setTimer] = useState(180);

    useEffect(() => {
        if (timer <= 0) return;
        const timeout = setTimeout(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearTimeout(timeout);
      }, [timer]);

    return (
        <h1 className={className}> Timer: {timer} </h1>
    );
};