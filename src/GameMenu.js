import React from "react";
import { Link } from "react-router-dom"
import x from "./images/icons/icon-x.svg"
import o from "./images/icons/icon-o.svg"
import x_grey from "./images/icons/icon-x-grey.svg"
import o_grey from "./images/icons/icon-o-grey.svg"
import x_black from "./images/icons/icon-x-black.svg"
import o_black from "./images/icons/icon-o-black.svg"
import styles from "./css/GameMenu.module.scss"
import { useState } from "react";



function GameMenu(props) {


    const [iconX, changeX] = useState(x_black)
    const [iconO, changeO] = useState(o_grey)
    const [displacement, setDisplacement] = useState("0")

    document.documentElement.style.setProperty("--displacement", displacement)

    function changeX_ToBlack () {
        changeX(x_black)
        changeO(o_grey)
        setDisplacement("0")
        
    }

    // function changeX_ToGrey () {
    //     changeX(x_grey)
    // }

    function changeO_ToBlack () {
        changeO(o_black)
        changeX(x_grey)
        setDisplacement("100%")
    }

    // function changeO_ToGrey () {
    //     changeO(o_grey)
    // }

    function assignMarks () {
        iconX === x_black ? props.assignMarks('o', 'x') : props.assignMarks('x', 'o')

    }
    

    return (


        <div>

            <div className={styles.container} >
                <div>
                    <img src={x} alt="x mark"></img>
                    <img src={o} alt="o mark"></img>
                </div>
                <div className={styles.gameMenuMarks}>
                    <h1>PICK PLAYER 1'S MARK</h1>

                    <div className={styles.choices}>
                        <div className={styles.x} onClick={changeX_ToBlack} >
                            <img src={iconX} alt="x mark"></img>
                        </div>

                        <div className={styles.o} onClick={changeO_ToBlack}>
                            <img src={iconO} alt="x mark"></img>
                        </div>
                    </div>

                    <label>REMEMBER : X GOES FIRST</label>
                </div>




                <Link to="/game-board">
                    <button onClick={assignMarks} className={styles.button}>NEW GAME (VS CPU)</button>
                </Link>

            </div>


        </div>




    )
}

export default GameMenu