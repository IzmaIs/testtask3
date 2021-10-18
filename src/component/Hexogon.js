import React, {useState} from "react";
import {InfoBlocks} from "./InfoBlocks";
import '../styles/main.css'

export const Hexagon = () => {
    const ii = InfoBlocks.filter((i )=> i.date === '26 июня')
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
                <>
                    <div className={`roundHex hexagon_0 ${isActive ? "active" : ""}`} onClick={handleToggle}>
                        <ul>
                        {ii.map((info) =>
                                <li key={info.place}>
                                    {info.date}
                                    <br/>
                                    {info.place}
                                    <br/>
                                    {info.time}
                                    <br/>
                                </li>
                            )}
                        </ul>
                    </div>
                </>

    )
}