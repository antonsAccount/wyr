import { useEffect, useState } from "react"
import PreviousWyrs from "./PreviousWyrs";
// import axios from "axios";

export default function Game() {
    const [ wyr, setWyr ] = useState ("");
    const [ prevWyrs, setPrevWyrs ] = useState([]);
    const [ error, setError ] = useState(false)

    useEffect(()=>{},[wyr, prevWyrs])

    const handleClick2 = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_API_URL);
            const data = await res.json();
            setPrevWyrs(prevState=>[data.data, ...prevState])
            setError(false)
            setWyr(data.data)
            console.log(data)
        } catch (e) {
            setError(true);
            console.log(e)
        }
    }

    return (
        <div className="game white-B">
            <button onClick={handleClick2}>{prevWyrs.length===0 ? "Start" : "Next"}</button>
            
            <h3 id="question">{wyr}</h3>
            {error === true ? <p4 style={{color: "rgba(255, 0, 0, 0.814)", fontSize: "1rem", textAlign: "center"}}>We are sorry, the connection to the Server can not be established. Please try again later!</p4> : <p></p>/* { <h4 style={{color: "green"}}>Connection established</h4> } */}
            {/* <button onClick={()=>setWyr((prevState)=>prevState+ "added this part")}>A eawe</button> */}
            <p style={{textDecoration: "underline", marginTop: "2rem"}}>Your History of Would You Rather:</p>
            {prevWyrs.length === 0 ? <p>You have not played yet, please press Start to begin</p> : <PreviousWyrs prevWyrs={prevWyrs} />}
        </div>

    )
}