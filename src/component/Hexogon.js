import React, {useState} from "react";
import {InfoBlocks} from "./InfoBlocks";
import '../styles/main.css'

export const Hexogon = () => {
    const ii = InfoBlocks.filter((i )=> i.date === '26 июня')
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
                <div>
                    <div className={`roundHex hexagon_0 ${isActive ? "active" : ""}`} onClick={handleToggle}>
                        {ii.map((info) =>
                            <div>
                                <p key={info.place}>{info.place}</p>
                                <p key={info.time}>{info.time}</p>
                                <p key={info.date}>{info.date}</p>
                            </div>
                        )}
                    </div>
                </div>
    )
}