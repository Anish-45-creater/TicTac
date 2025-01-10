import React, { useState } from "react";
import "./TicTacToe.css";
import x from "../Assets/X.png";
import o from "../Assets/O.png";
const TictacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [message,setMessage]=useState("In React")
  const [PointsX,setPointX]=useState(0)
  const [PointsY,setPointY]=useState(0)

  const click = (num) => {
    if (data[num] || finish) return;
    const dupData = [...data];
    const newData = count % 2 === 0 ? "X" : "O";
    dupData[num] = newData;
    setData(dupData);
    setCount(count + 1);
  
    const winner = checkWin(dupData);
    
    if (winner) {
      setFinish(true);
      setMessage(`${winner} Won`);
      if (winner === "X") {
        setPointX(PointsX + 1);
      } else {
        setPointY(PointsY + 1);
      }
      setTimeout(() => {
        reset();
      }, 900);
    } else if (!dupData.includes("")) {
      setFinish(true);
      setMessage("Match Drawn");
      setTimeout(() => {
        reset();
        
      }, 900);
     
    }
  };
  
  const checkWin = (data) => {
    const Wincomb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (const [a, b, c] of Wincomb) {
      if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") {
        return data[a];
      }
    }
    if (!data.includes("")) {
      return 0
    }
  };
  
  const reset = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setFinish(false);
    setCount(0);
    setMessage("In React")
  };

  return (
    <div className="Container">
      <h1 className="header">
        Tic Tac Toe <span className="winner"> -{message}</span>
      </h1>
      <h1> | X - {PointsX} | O -{PointsY} |</h1>
      <div className="outer">
      <div className="board">
        {data.map((box, index) => (
          <div
            className="boxes"
            key={index}
            onClick={() => {
              click(index);
            }}
          >
            {box && <img src={box === "X" ? x : o} />}
          </div>
        ))}
      </div>
      </div>
      {/* <button className="TicButton" onClick={reset}>
        Reset
      </button> */}
    </div>
  );
};

export default TictacToe;
