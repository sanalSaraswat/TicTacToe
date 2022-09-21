import React from "react"
import x from "./images/icons/icon-x.svg"
import o from "./images/icons/icon-o.svg"
import x_grey from "./images/icons/icon-x-grey.svg"
import o_grey from "./images/icons/icon-o-grey.svg"
import restart from "./images/icons/icon-restart.svg"
import styles from "./css/GameBoard.module.css"

function GameBoard() {
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

                <button className={styles.restart}>
                    <img src={restart} alt="restart" ></img>
                </button>

            </div>

            <div className={styles.gameBoard}>

                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>

            </div>

            <div className={styles.scoreBoard}>

                <div className={styles.score} style={{backgroundColor: "#f2b137"}}>
                    <h3>O (YOU) </h3>
                    <b>0</b>
                </div>

                <div className={styles.score} style={{backgroundColor: "#a8bfc9"}}>
                    <h3>Ties</h3>
                    <b>0</b>
                </div>

                <div className={styles.score} style={{backgroundColor: "#31c3bd"}}>
                    <h3>X (CPU)</h3>
                    <b>0</b>
                </div>

            </div>
        </div>


    )
}

export default GameBoard