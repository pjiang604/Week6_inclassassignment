import { useState } from "react"
import Start from "./Start"
export default function Survey(){

    const [name, setName] = useState(""); //this will store somebody's name
    const [isActiveOne, setIsActiveOne] = useState(true); //showing
    const [isActiveTwo, setIsActiveTwo] = useState(false); //not showing

    const passName = (event) => { //passName event, on key down of Enter, it will hide One and show Two
        if(event.key === "Enter"){
            console.log("enter")
            setIsActiveOne(false); //this changes the display to hiding
            setIsActiveTwo(true); //this changes the display to showing
        }
    }

    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}} > 
                <h1>What is your name?</h1> 
                <input 
                value={name}
                onChange={ event => setName(event.target.value)} //this line sets the name. Checks as the input updates, sets the name
                placeholder="Enter Name" 
                onKeyDown={passName} //hit the key triggers passName event
                type="text" />
            </div>
            <div style={{display: isActiveTwo ? 'block' : 'none'}}> 
                <Start passName={name} /> 
            </div>
        </div>
    )
}