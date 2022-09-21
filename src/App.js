import React from "react";
import GameMenu from "./GameMenu";
import GameBoard from "./GameBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/game-board" element={<GameBoard />}></Route>
        <Route exact path="/" element={<GameMenu />}></Route>
      </Routes>

    </BrowserRouter>

  )

}

export default App