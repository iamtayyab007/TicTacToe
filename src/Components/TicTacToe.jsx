import React, { useRef } from "react";
import { useState } from "react";
import circle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";

let data = ["", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const title = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxNull = () => {
    let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    boxes.map((e) => {
      e.current.innerHTML = "";
    });
  };

  const reset = () => {
    title.current.innerHTML = `Tic Tac Toe in <span className='bg-green-400'>React</span> `;
    data = ["", "", "", "", "", "", "", ""];
    setLock(false);
    setCount(0);
    boxNull();
  };
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'/>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'/>`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      title.current.innerHTML = `Congratulations: <img src='${cross_icon}'/>`;
    } else {
      title.current.innerHTML = `Congratulations: <img src='${circle_icon}'/>`;
    }
  };

  return (
    <div className="font-bold">
      <h1
        className="text-3xl flex justify-center items-center gap-3 mb-3 text-orange-400"
        ref={title}
      >
        Welcome to Tic Tac Toe <span className="text-green-500">React</span>
      </h1>
      <div className="board flex m-auto w-6/12 h-2/4">
        <div className="row1">
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 0);
            }}
            ref={box1}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 1);
            }}
            ref={box2}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 2);
            }}
            ref={box3}
          ></div>
        </div>

        <div className="row2">
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 3);
            }}
            ref={box4}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 4);
            }}
            ref={box5}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 5);
            }}
            ref={box6}
          ></div>
        </div>

        <div className="row3">
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 6);
            }}
            ref={box7}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 7);
            }}
            ref={box8}
          ></div>
          <div
            className="boxes flex py-11 px-11 h-48 w-48 bg-slate-500 border-4 border-slate-700 rounded-md"
            onClick={(e) => {
              toggle(e, 8);
            }}
            ref={box9}
          ></div>
        </div>
      </div>
      <button className="bg-yellow-500 rounded-md p-3 m-3" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
