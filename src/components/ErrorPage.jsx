import { useEffect } from "react"
import {Link, useNavigate } from "react-router-dom";

export default function ErrorPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },5000)
    }, [])
   
    return(
        <div className="error">
            <h2>404</h2>
            <h3> The page you are looking for doesn't exist. {/* Click <Link to="/">here</Link> to go back to the Homepage */} You will be automatically redirected in 5 seconds</h3>
        </div>
    )

}