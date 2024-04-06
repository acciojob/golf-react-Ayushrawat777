import React, { useState, useEffect } from "react";

const GolfGame = () => {
  const [isball, setisBall] = useState(false);
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 });

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
        setBallPosition((prevPosition) => {
    if (prevPosition === null) return null; 
        return { ...prevPosition, left: (prevPosition.left || 0) + 5 };
      }); 
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleStartGame = () => {
    setisBall(true);
  };

  return (
    <div>
      {isball ? (
        <div
          className="ball"
          style={{
            backgroundColor:"black",
             position: "absolute",
            top: ballPosition.top,
            left: ballPosition.left,
            width: "50px",
            height: "50px",
            borderRadius: "50%", 
          }}
        ></div>
      ) : (
        <button className="start" onClick={handleStartGame}>
          Start
        </button>
      )}
    </div>
  );
};

export default GolfGame;
