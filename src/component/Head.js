import React from "react";
import {Navs} from "./Navs";
import "../styles/Styles.css";


export const Head = () => (
    <header>
        <ul>
            {Navs.map((nav) =>
                <li key={nav.id}>
                    <img key={nav.img} src={nav.img}/>
                    <a key={nav.id} href={nav.url}>{nav.text}</a>
                </li>
            )}
        </ul>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
    </header>
)