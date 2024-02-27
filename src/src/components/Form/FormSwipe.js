import "../Switch/Switch.css"
import { useState } from 'react';
import CookingPot from "./Icon/CookingPot";
import ServiceBell from "./Icon/ServiceBell";
const FormSwipe = ({label}) =>{
    const [roomLocation, setRoomLocation]= useState(true);
    return (
        <div>

            <p className="form-label text-primary fw-bold">{label}</p>
            <div className="Switch d-flex align-items-center bg-primary-subtle rounded-pill border border-primary-subtle justify-content-center p-1">
                <div className={roomLocation ? ` rounded-circle p-2 bg-white`:`rounded-circle p-2`} onClick={()=>setRoomLocation(true)}>
                    <ServiceBell color={roomLocation ? "#ff8b40" : "black"}/>
                </div>
                <div className={!roomLocation ? ` rounded-circle p-2 bg-white ms-3`:`rounded-circle p-2 ms-3`} onClick={()=>setRoomLocation(false)}>
                <CookingPot color={!roomLocation ? "#ff8b40" : "black"}/>
                </div>
            </div>
            <p className="text-center fw-bold mt-1">{roomLocation ? "Serveur" : "Cuisinier"}</p>
        </div>
    );
}

export default FormSwipe;