import React, {useState} from "react";
import {InfoBlocks} from "./InfoBlocks";
import "../styles/main.css";
import {Hexagon} from "./Hexogon";

export const Main = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <main>
            <div className="hex-cont">
                <Hexagon/>
                <div className="circle_1">
                    <div className={`roundHex hexagon_1 ${isActive ? "active" : ""}`} onClick={handleToggle}>
                    </div>
                    <div className={`roundHex hexagon_-1 ${isActive ? "active" : ""}`} onClick={handleToggle}>
                    </div>
                </div>
                <div className="circle_2">
                    <div className={`roundHex hexagon_2 ${isActive ? "active" : ""}`} onClick={handleToggle}>
                    </div>
                    <div className="roundHex hexagon_-2">
                    </div>
                </div>
                <div className="line_1"/>
                <div className="line_2"/>
            </div>
        </main>
    )
}