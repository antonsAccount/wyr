import { useState } from "react"
import axios from "axios";

export default function Game() {
    let [ wyr, setWyr ] = useState ("");
    

    const handleClick = () => {
        axios.get("http://localhost:5050/wyr").then((res)=>{
            setWyr(res.data)
        })
    }
    return (
        <div className="game">
            <button onClick={handleClick}>Start</button>
            <h3>{wyr}</h3>
            
        </div>
    )
}