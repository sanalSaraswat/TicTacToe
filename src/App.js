import React from "react";
import GameMenu from "./GameMenu";
import GameBoard from "./GameBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom"


const players = {cpu: "", human: ""}

function App() {

  function playerMark(i, j) {
    players.cpu = i
    players.human = j
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/game-board" element={<GameBoard players={players} />}></Route>
        <Route exact path="/" element={<GameMenu assignMarks={playerMark} />}></Route>
      </Routes>

    </BrowserRouter>

  )

}

export default App