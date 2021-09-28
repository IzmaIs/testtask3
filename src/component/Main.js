import React from "react";
import {InfoBlocks} from "./InfoBlocks";
import main from "../styles/main.css";

export const Main = () => (
    <main>
        {InfoBlocks.map((InfoBlock) =>
            <div className="versus-items">
                <div>
                    <p key={InfoBlock.versus1}>{InfoBlock.versus1}</p>
                </div>
                <div>
                    <p key={InfoBlock.versus2}>{InfoBlock.versus2}</p>
                </div>
            </div>
        )}
    </main>
)