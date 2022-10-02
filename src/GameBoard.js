import React, { useEffect, useState } from "react"
import x from "./images/icons/icon-x.svg"
import o from "./images/icons/icon-o.svg"
import x_outline from "./images/icons/icon-x-outline.svg"
import o_outline from "./images/icons/icon-o-outline.svg"
import x_grey from "./images/icons/icon-x-grey.svg"
import o_grey from "./images/icons/icon-o-grey.svg"
import restart from "./images/icons/icon-restart.svg"
import styles from "./css/GameBoard.module.css"
import Restart from "./modals/Restart"

function GameBoard(props) {

    // useEffect(() => {
    //     console.log(document.getElementById(id).src)
    // }, [])


    const [modalIsOpen, setModalIsOpen] = useState(false)
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const players = props.players
    const symbolOnHover = players.human === 'x' ? x_outline : o_outline
    const symbolOnClick = players.human === 'x' ? x : o
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])
    const [winner, setWinner] = useState()
    const [isCpuNext, setIsCpuNext] = useState(players.cpu === 'x' ? true : false)
    console.log(isCpuNext)
    console.log(players)

    function sleep(milliSec) {
        setTimeout(function () {
            console.log("hello")
        }, milliSec)
    }
    cpuPlay()

    function cpuPlay() {
        // sleep()
        let emptyIndexes = []
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === "") {
                    emptyIndexes.push({ row: row, col: row })
                }
            }
        }

        for (let i = 0; i < emptyIndexes.length; i++) {
            console.log(emptyIndexes[i])
        }

        let index = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
        console.log(index)
        
        updateBoard(index, players.cpu)

        // playTurn(index, players.cpu)

    }

    function updateBoard({row, col}, symbol) {

        console.log(board)
        board[row][col] = symbol
        
        // setBoard(board[row][col] = symbol)
    }

    

    return (
        <div className={styles.container}>

            <div className={styles.gameHeader}>

                <div>
                    <img src={x} alt="x mark"></img>
                    <img src={o} alt="o mark"></img>
                </div>

                <div className={styles.turn}>
                    <img src={x_grey} alt="x mark"></img>

                    <h1>TURN</h1>
                </div>

                <button className={styles.restart} onClick={setModalIsOpenToTrue}>
                    <img src={restart} alt="restart" ></img>
                </button>

            </div>

            <div className={styles.gameBoard}>

                <div  className={styles.cell}>
                    <img id="img1" src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>
                <div className={styles.cell}>
                    <img src={symbolOnHover} alt="X mark" ></img>
                </div>

            </div>

            <div className={styles.scoreBoard}>

                <div className={styles.score} style={{ backgroundColor: "#f2b137" }}>
                    <h3>{players.human} (YOU) </h3>
                    <b>0</b>
                </div>

                <div className={styles.score} style={{ backgroundColor: "#a8bfc9" }}>
                    <h3>Ties</h3>
                    <b>0</b>
                </div>

                <div className={styles.score} style={{ backgroundColor: "#31c3bd" }}>
                    <h3>{players.cpu} (CPU)</h3>
                    <b>0</b>
                </div>

            </div>

            {/* <Restart modal={modalIsOpen} closeModal={setModalIsOpenToFalse}
                setModal={setModalIsOpen}
            /> */}
            {modalIsOpen === true && <Restart modal={modalIsOpen} closeModal={setModalIsOpenToFalse} />}

        </div>




    )
}

export default GameBoard