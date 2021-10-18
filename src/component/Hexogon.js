import React, {useState} from "react";
import {InfoBlocks} from "./InfoBlocks";
import '../styles/main.css'

export const Hexagon = () => {
    const ii = InfoBlocks.filter((i) => i.date === '26 июня')
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div className={`roundHex hexagon_0 ${isActive ? "active" : ""}`} onClick={handleToggle}>
            {ii.map((info) =>
                <ul key={info.date}>
                    <li key={info.date}>{info.date}</li>
                    <li key={info.place}>{info.place}</li>
                    <li key={info.time}>{info.time}</li>
                </ul>
            )}
        </div>
    )
}