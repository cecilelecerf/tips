import NavDate from "./NavDate/NavDate"
import SliderDate from "./SliderDate/SliderDate"
import "./SelectDate.css"
import { useState } from "react"

function SelectDate (){
    const [getDate, setDate]= useState("day")
    const handleClick=(type)=>{
        setDate(type)
    }
    return(
    <div className="SelectDate mx-5 mb-3">
        <div className="mb-3">
            <SliderDate date={getDate === "day" ? "Jeudi, 21 avr" : getDate === "week" ? "semaine 16" : "Avril" } />
        </div>
        <NavDate Date={getDate} handleClick={handleClick} />
    </div>
)}

export default SelectDate