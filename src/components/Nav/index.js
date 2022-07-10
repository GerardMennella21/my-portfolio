import React from "react";

export default function Nav() {
    return (
        <nav>
            <ul className="nav justify-content-around">
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#about-me">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}