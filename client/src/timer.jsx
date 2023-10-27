
import React from "react";
import {useState, useEffect } from "react";

export const Timer = (props) => {
    const {className, time_limit} = props;
    const [timer, setTimer] = useState(time_limit);

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