import "./App.css";
import Table from "./table";
import Keyboard from "./keyboard";
import React, { useState } from "react";
import HeroPopup from "./components/hero_popup";
import { Words } from "./words";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fireworks } from "fireworks/lib/react";
import Timer from "./components/timer";

function App() {
  const [lettersTable, setLettersTable] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });
  const [lettersTableStatus, setLettersTableStatus] = useState({
    0: [1, 1, 1, 1, 1],
    1: [0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 0],
    3: [0, 0, 0, 0, 0],
    4: [0, 0, 0, 0, 0],
    5: [0, 0, 0, 0, 0],
  });
  const [currentRow, setCurrentRow] = useState(0);
  const [complete, setComplete] = useState({
    active: false,
    message: "",
    prompt: "",
  });
  const [word, setWord] = useState(
    Words[Math.floor(Math.random() * Words.length)]
  );
  const [goodLetters, setGoodLetters] = useState([]);
  const [badLetters, setBadLetters] = useState([]);
  const [fireworks, setFireworks] = useState(false);
  const [start, setStart] = useState(true);

  const handleButton = (letter) => {
    if (letter === "Enter") {
      if (lettersTable[currentRow].length < 5) {
        toast("Need 5 letters");
      }
      if (lettersTable[currentRow].length === 5 && currentRow < 5) {
        if (!Words.includes(lettersTable[currentRow].join(""))) {
          toast("This word is not in the system.");
          return false;
        }
        if (word === lettersTable[currentRow].join("")) {
          setComplete({
            active: true,
            prompt: `OOOO AHHA Word: ${word}`,
            message: "Would you like the restart?",
          });
          setFireworks(true);
          setGoodLetters([]);
          setBadLetters([]);
        }
        const check = [
          word[0] === lettersTable[currentRow][0]
            ? 3
            : word.includes(lettersTable[currentRow][0])
            ? 2
            : 0,
          word[1] === lettersTable[currentRow][1]
            ? 3
            : word.includes(lettersTable[currentRow][1])
            ? 2
            : 0,
          word[2] === lettersTable[currentRow][2]
            ? 3
            : word.includes(lettersTable[currentRow][2])
            ? 2
            : 0,
          word[3] === lettersTable[currentRow][3]
            ? 3
            : word.includes(lettersTable[currentRow][3])
            ? 2
            : 0,
          word[4] === lettersTable[currentRow][4]
            ? 3
            : word.includes(lettersTable[currentRow][4])
            ? 2
            : 0,
        ];
        setLettersTableStatus({
          ...lettersTableStatus,
          [currentRow]: check,
          [currentRow + 1]: [1, 1, 1, 1, 1],
        });
        lettersTable[currentRow].map((e) => {
          word.includes(e) && goodLetters.push(e);
          !word.includes(e) && badLetters.push(e);
        });
        setCurrentRow(currentRow + 1);
      } else if (lettersTable[currentRow].length === 5 && currentRow === 5) {
        if (word === lettersTable[currentRow].join("")) {
          setComplete({
            active: true,
            prompt: `OOOO AHHA Word: ${word}`,
            message: "Would you like the restart?",
          });
          setGoodLetters([]);
          setBadLetters([]);
          setFireworks(true);
        } else {
          setComplete({
            active: true,
            prompt: `OOOO AHHA Word: ${word}`,
            message: "You failed. Would you like the restart?",
          });
          setGoodLetters([]);
          setBadLetters([]);
        }
      }
    } else if (letter === "Delete") {
      if (lettersTable[currentRow].length !== []) {
        const row = lettersTable[currentRow].splice(
          0,
          lettersTable[currentRow].length - 1
        );
        setLettersTable({ ...lettersTable, [currentRow]: row });
      }
    } else {
      if (lettersTable[currentRow].length < 5 && currentRow < 6) {
        const row = [...lettersTable[currentRow], letter];
        setLettersTable({ ...lettersTable, [currentRow]: row });
      }
    }
  };

  const handleExit = () => {
    setWord( Words[Math.floor(Math.random() * Words.length)]);
    setFireworks(false);
    setStart(false);
    setComplete({ active: false, message: "", prompt: "" });
    setCurrentRow(0);
    setLettersTable({ 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] });
    setLettersTableStatus({
      0: [1, 1, 1, 1, 1],
      1: [0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0],
    });
  };

  let fxProps = {
    count: 5,
    interval: 200,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <div className="table">
        <Table
          lettersTable={lettersTable}
          currentRow={currentRow}
          lettersTableStatus={lettersTableStatus}
        />
      </div>
      <div className="keyboard">
        <Keyboard
          goodLetters={goodLetters}
          badLetters={badLetters}
          handleButton={handleButton}
        />
      </div>
      <div>{/* <Timer /> */}</div>
      {complete.active && (
        <HeroPopup
          handleExit={handleExit}
          button={"Restart"}
          prompt={complete.prompt}
          message={complete.message}
        />
      )}
      <ToastContainer position="bottom-right" />
      {fireworks && <Fireworks {...fxProps} />}
      {start && (
        <HeroPopup
          handleExit={handleExit}
          button={"Ready"}
          prompt={""}
          message={""}
          img={true}
        />
      )}
    </div>
  );
}

export default App;
