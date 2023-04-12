import { useState } from "react"
import axios from "axios";
export default function CrudInterface (props) {
    let [ doc,setDoc ] = useState({
        name:"",
        positive:""
    })
    let [ alert, setAlert ] = useState("")
    const handleChange = (e) => {
        setDoc({
            ...doc, name: e.target.value
        })
        console.log(doc);
    } 
    const dropDownChange = (e) => {
        setDoc({
            ...doc, positive: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (doc.name==="" || doc.positive===""){
            setAlert("Please fill in all the necessary information")
        }
        else {
            setAlert("");
            axios.post(("http://localhost:5050/wyr"), {
                name: doc.name,
                positive: doc.positive
            })
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err))
            setDoc({
                name:"",
                positive:""
            })
        }  
        }
        
    return (
        <div>
            <form onSubmit={handleSubmit} className="crud_form">
                <label htmlFor="input">Name: </label>
                {/* <input type="text" id="input" value={doc.name} onChange={handleChange} /> */}
                <textarea type="text" id="input" rows="3" cols="30" value={doc.name} onChange={handleChange} />
                
                <label htmlFor="positive">Positive/Negative</label>
                <select name="positive" id="positive" onChange={dropDownChange}>
                    <option value="" defaultValue={props.defaultValue || 'Select'} hidden>Choose here</option>
                    <option value="0">negative</option>
                    <option value="1">positive</option>
                </select>
                <br />
                <h5 id="alert">{alert}</h5>
                <button className="crud_btn">Submit</button>
                {/* <div className="crud_btn">Submit</div> */}

            </form>
            
            {/* <hr />
            <div className="crud_overview">
            <p> About to be submitted:</p>
            <h2>Would you rather: {doc.name}</h2>
            <h2> Positive: {doc.positive==="1" ? "positive" : "negative"}</h2>
            </div>
             */}
            
        </div>
    )
}