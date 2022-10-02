import React, { useState } from "react";
import styles from "../css/Restart.module.css"

export default function Restart(props) {

    const [opacity, setOpacity] = useState(1)
    document.documentElement.style.setProperty("--opacity", opacity)

    function closeModal() {
        setOpacity(0)
        props.closeModal()

    }
    return (
        <div className={styles.modal} >
            <div className={styles.modal_content} >

                <h3>Restart Game</h3>

                <div>
                    <button className={styles.cancel} onClick={closeModal} >No, Cancel</button>
                    <button className={styles.restart} >Yes, Restart</button>
                </div>


                
            </div>
        </div>

    )
}
