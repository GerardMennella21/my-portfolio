import React from "react";

export default function Nav() {
    return (
        <nav>
            <ul className="nav justify-content-around">
                <li className="nav-item">
                    <a className="nav-link " href="#about-me">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}