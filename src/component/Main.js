import React, {useState} from "react";
import {InfoBlocks} from "./InfoBlocks";
import "../styles/main.css";
import {Hexogon} from "./Hexogon";

export const Main = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <main>
            <div className="hex-cont">
                <Hexogon/>
                <div className="circle_1">
                    <div className="roundHex hexagon_1">
                    </div>
                    <div className="roundHex hexagon_-1">
                    </div>
                </div>
                <div className="circle_2">
                    <div className="roundHex hexagon_2">
                    </div>
                    <div className="roundHex hexagon_-2">
                    </div>
                </div>
                <div className="line_1"></div>
                <div className="line_2"></div>
            </div>
        </main>
    )
}